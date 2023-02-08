import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersServiceService }                from 'src/app/services/users-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compo2',
  styleUrls: ['./compo2.component.css'],
  templateUrl: './compo2.component.html',
})
export class Compo2Component {
  constructor(private serviceUser: UsersServiceService,  private cookieService: CookieService, private router: Router) {}

  //Init vars
  nombre: any = '';
  role:   any = ''
  result: any = ''

  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required]),
  });

  submit(): void {
    // Load random users
    this.serviceUser.getUsers();
    // Validate login
    this.role = this.serviceUser.validateUser(this.myForm.value.username, this.myForm.value.password)
    this.nombre = this.myForm.value.username;

    // Get cookie 
    this.cookieService.get('username');
    this.cookieService.get('role');

    // Redirects to esdeveniments
    if (this.role != '') {
      this.router.navigate(['/esdeveniments']);
      sessionStorage.removeItem('reloaded'); 

    } 

  }
  
}
