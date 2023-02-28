import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Animal } from 'src/app/model/Animal';
import { UserLoginRegisterService } from 'src/app/services/user-login-register.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor ( private userLoginRegisterService: UserLoginRegisterService, private fb: FormBuilder) {}

  arrayanimals!:   Animal[];
  animalToModify!: any ;
  animalForm!: FormGroup;

  // ngOnInit() {
  //   let animal_raw = this.userLoginRegisterService.selectAnimal(this.userLoginRegisterService.id2modify)
  //   console.log((animal_raw))
  //   // this.animalForm = this.fb.group({
  //   //   id: [null, Validators.required],
  //   //   grupo: [null, Validators.required],
  //   //   familia: [null, Validators.required],
  //   //   especie: [null, Validators.required],
  //   //   origen: [null, Validators.required],
  //   //   endemismo: [null, Validators.required],
  //   //   ambient: [null, Validators.required]
  //   // });
  // }

  async ngOnInit() {

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

    let animal_raw;
    try {
      this.userLoginRegisterService.selectAnimal(this.userLoginRegisterService.id2modify).subscribe(
        result => {
          this.animalToModify = result;
          console.log (this.animalToModify);
          const id = result.resultats[0].Id;
          console.log(id);

        },
        error => {
          console.error(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  onSubmit(){
    // Obtener los valores del formulario
    const values = this.animalForm.value;
  }

  // submitupdateanimal(){
  //   console.log('click')
  //   this.userLoginRegisterService.updateAanimal(this.formaseeanimal.value.especie,this.formaseeanimal.value.cantidad,this.formaseeanimal.value.familia,this.formaseeanimal.value.alimentacion,this.formaseeanimal.value.habitat,this.animalToModify.id).subscribe(
  //     result => {
  //       if(result==null){
  //         console.log('n0oooo')
  //       }else{
  //         console.log(result)
  //         console.log('update')
  //       }
  //     }
  //   )
  // }
}
