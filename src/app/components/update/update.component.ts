import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Animal } from 'src/app/model/Animal';
import { UserLoginRegisterService } from 'src/app/services/user-login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor ( private userLoginRegisterService: UserLoginRegisterService, private fb: FormBuilder,  private router: Router) {}

  animalToModify!: Animal ;
  animalForm!: FormGroup;

  myRole: any;
  result!: string;


  async ngOnInit() {

    // Check role, if not adminm redirects to home page
    this.myRole = this.userLoginRegisterService.getRole()
    console.log(this.myRole)
    if (this.myRole != 'admin') {
      this.router.navigate(['/home']);

    }

    // Form group
    this.animalForm = new FormGroup({
      id: new FormControl('', [
        Validators.required
      ]),
      grup: new FormControl('', [
        Validators.required
      ]),
      familia: new FormControl('', [
        Validators.required
      ]),
      especie: new FormControl('', [
        Validators.required
      ]),
      origen: new FormControl('', [
        Validators.required
      ]),
      endemisme: new FormControl('', [
        Validators.required
      ]),
      ambient: new FormControl('', [
        Validators.required
      ])
    })

    try {
      // Select animal with the id selected on table view
      this.userLoginRegisterService.selectAnimal(this.userLoginRegisterService.id2modify).subscribe(
        result => {
          this.animalToModify = result;
          console.log (this.animalToModify);
          // 
          this.animalForm.patchValue({
            id:result.result[0].Id,
            grup: result.result[0].Grup,
            familia: result.result[0].Familia,
            especie: result.result[0].Espècie,
            origen: result.result[0].Origen,
            endemisme: result.result[0].Endemisme,
            ambient: result.result[0].Ambient,
          });
        },
        error => {
          console.error(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  onSubmit(): void{
    
    // Obtener los valores del formulario
      this.animalToModify = new Animal(
        this.animalForm.value.id,
        this.animalForm.value.grup,
        this.animalForm.value.familia,
        this.animalForm.value.especie,
        this.animalForm.value.origen,
        this.animalForm.value.endemisme,
        this.animalForm.value.ambient,
      );
  
      // Call service for update animal, le enviamos el objeto Animal
      this.userLoginRegisterService.updateAnimal(this.animalToModify).subscribe((res) => {
        console.log('Respuesta  de la componente: ');
        console.log(res);
        
        if ( res != null) {
          this.result = 'Animal updated successfully';
        }else {
          this.result = 'An error occurred';
        }
  
      })
  
  
    }
  }