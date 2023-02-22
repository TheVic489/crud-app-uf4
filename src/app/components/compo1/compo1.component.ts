import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserLoginRegisterService } from 'src/app/services/user-login-register.service';
import { Router } from '@angular/router';


// COMPONENTE DEL REGISTRO
@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css'],
})
export class Compo1Component {
  constructor(private serviceUserLoginRegister: UserLoginRegisterService) {}

  //Init vars
  registerUserData!: User;
  result = '';

  // Form group
  myForm = new FormGroup({

    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),

    correo: new FormControl('', [
      Validators.required,
      // Validators.email
      Validators.pattern(
        "^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
      ),
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),

    tel:       new FormControl('', [Validators.required]),
    fullName:  new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]),

  });
  
  submit(): void {
    //solo si clicas
    this.registerUserData = new User(
      this.myForm.value.fullName,
      this.myForm.value.username,
      this.myForm.value.password,
      'staff',                  // Siempre staff al registrar
      this.myForm.value.correo,
      this.myForm.value.tel,
    );

    // Call service for register the user
    this.serviceUserLoginRegister.registerUser(this.registerUserData).subscribe((res) => {
      console.log('Respuesta  de la componente: ');
      console.log(res);
      
      if ( res != null) {
        this.result = 'User registered successfully';
      }else {
        this.result = 'An error occurred';
      }

    })


  }
}
