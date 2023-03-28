import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/Animal';
import { UserLoginRegisterService } from 'src/app/services/user-login-register.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  constructor ( private userLoginRegisterService: UserLoginRegisterService,  private router: Router) {}

  result: string = '';
  myRole: any;
  miform = new FormGroup({
    Grup:new FormControl('',[    
      Validators.required,
    ]),

    Familia: new FormControl('',[
      Validators.required,
    ]),

    Especie: new FormControl('',[
      Validators.required
    ]),

    Origen: new FormControl('',[
      Validators.required,
    ]),

    Endemisme:new FormControl('',[
      Validators.required,
      ]),

    Ambient: new FormControl('',[
      Validators.required
    ]),

  })

  ngOnInit(): void {

    //TOPMENU SESSION HANDLE
    //Check if is loged on init
    this.myRole = this.userLoginRegisterService.getRole()
    console.log(this.myRole)
    if (this.myRole != 'admin') {
      this.router.navigate(['/home']);

    }
  }
  submit():void{

    this.userLoginRegisterService.insertAnimal(this.miform.value.Grup, this.miform.value.Familia,this.miform.value.Especie, this.miform.value.Origen, this.miform.value.Endemisme, this.miform.value.Ambient).subscribe(
      (res) => {
        console.log('Respuesta  de la componente: ');
        console.log(res);
        
        if ( res) {
          this.result = 'Animal registered successfully';
        }
  
      }
    );
  }
}
