import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersServiceService }                from 'src/app/services/users-service.service';
import { UserLoginRegisterService } from 'src/app/services/user-login-register.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

//* COMPONENTES DEL LOGIN */
@Component({
  selector: 'app-compo2',
  styleUrls: ['./compo2.component.css'],
  templateUrl: './compo2.component.html',
})
export class Compo2Component implements OnInit {
  constructor(private serviceUser: UsersServiceService,  private cookieService: CookieService, private router: Router, private serviceUserLoginRegister: UserLoginRegisterService) {

  }

  //Init vars
  nombre: any = '';
  role:   any = '';
  userResult: any = '';
  message: any = '';
  // Form group login form
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required]),
  });

  // Al darle al boton de enviar
  submit(): void {
    // Get cookie 
    

    // Llamamos a la funcion del servicio para validar las credenciales
    this.serviceUserLoginRegister.validateLogin(this.myForm.value.username, this.myForm.value.password).subscribe((res) => {
      console.log('Respuesta en la componente: ');
      console.log(localStorage.getItem('usuari'));
      
      if ( res.resultats.length = 0) { // Si la respuesta es mala, informamos
        this.message = 'Invalid username or password';
        this.userResult=JSON.parse(JSON.stringify(res));
      }else {
        // Si todo va bien
        this.role = this.userResult.role;

        this.router.navigate(['/home']);
        window.location.reload(); 

      }

    })


  }
  ngOnInit(): void {

    // Redirect if already logged in
    if (this.serviceUserLoginRegister.checkSession()){
      this.router.navigate(['/home']);
    }

    };
}
