import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';

// COMPONENTE DEL REGISTRO
@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css'],
})
export class Compo1Component {
  constructor(private serviceUser: UsersServiceService) {}

  //Init vars
  registerUserData!: User;
  result = '';


  //Form selects
  estado     = ['Casat/da', 'Solter/a', 'Divorciat/da'];
  informacio = ['Música', 'Accesoris', 'Roba'];

  // Form group
  myForm = new FormGroup({

    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'),
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
      Validators.minLength(8),
    ]),

    passwordrepeat:  new FormControl('', [Validators.required]),
    sexe:            new FormControl('', [Validators.required]),
    checkcondicions: new FormControl('', [Validators.required]),
    estat:           new FormControl('', [Validators.required]),
    info:            new FormControl('', []),
  });
  
  submit(): void {
    //solo si clicas
    this.registerUserData = new User(
      this.myForm.value.username,
      this.myForm.value.password,
      'comprador',                 // Siempre comprador al registrar
      this.myForm.value.correo,
      this.myForm.value.estat,
      this.myForm.value.sexe,
      this.myForm.value.info,
      this.myForm.value.checkcondicions
    );
    // Call service for register the user
    this.serviceUser.registerUser(this.registerUserData)
    this.result = "Register successfuly";


  }
}
