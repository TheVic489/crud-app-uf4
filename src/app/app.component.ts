import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { UserLoginRegisterService } from 'src/app/services/user-login-register.service';

// MAIN APP COMPONENT

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private serviceUserLogin: UserLoginRegisterService,  private cookieService: CookieService) {}
  
  // Init vars
  isLoged!: boolean;
  myRole!: any;
  myEventsArray!: Event[];
  
  // Hacer log out
  doLogOut() {
    //Delete all localstorage 
    localStorage.clear();

    // Reload page to see changes
    window.location.reload(); 

  }
  ngOnInit(): void {

    //TOPMENU SESSION HANDLE
    //Check if is loged on init
    this.isLoged = this.serviceUserLogin.checkSession()
    console.log(this.isLoged)
    //Get cookie
    let dirtRole = JSON.stringify(localStorage.getItem('role'))    
    this.myRole = dirtRole.replace(/"/g, '');

    };
  }