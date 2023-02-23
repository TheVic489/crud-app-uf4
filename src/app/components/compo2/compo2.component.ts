import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersServiceService }                from 'src/app/services/users-service.service';
import { UserLoginRegisterService } from 'src/app/services/user-login-register.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compo2',
  styleUrls: ['./compo2.component.css'],
  templateUrl: './compo2.component.html',
})
export class Compo2Component {
  constructor(private serviceUser: UsersServiceService,  private cookieService: CookieService, private router: Router, private serviceUserLoginRegister: UserLoginRegisterService) {

    // if (this.serviceUser = serviceUser.userData()) {
    //   this.router.navigate(['/home']);
    // }
  }

  //Init vars
  nombre: any = '';
  role:   any = '';
  userResult: any = '';
  message: any = '';

  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required]),
  });

  submit(): void {
    // Get cookie 
    this.cookieService.get('username');
    this.cookieService.get('role')
;
    this.serviceUserLoginRegister.validateLogin(this.myForm.value.username, this.myForm.value.password).subscribe((res) => {
      console.log('Respuesta en la componente: ');
      console.log(localStorage.getItem('usuari'));
      
      if ( res.resultats.length = 0) {
        this.message = 'Invalid username or password';
        this.userResult=JSON.parse(JSON.stringify(res));
      }else {
        this.role = this.userResult.role;

        this.router.navigate(['/home']);
      }

    })

    // // Redirects to esdeveniments
    // if (this.role != '') {
    //   this.router.navigate(['/esdeveniments']);
    //   sessionStorage.removeItem('reloaded'); 

    // } 

  }
  
}
