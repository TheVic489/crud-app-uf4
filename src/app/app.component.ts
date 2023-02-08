import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsersServiceService } from 'src/app/services/users-service.service';

// MAIN APP COMPONENT

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private serviceUser: UsersServiceService,  private cookieService: CookieService) {}
  
  // Init vars
  isLoged!: boolean;
  myRole!: string;
  myEventsArray!: Event[];
  
  // Hacer log out
  doLogOut() {

    //Delete all cookies 
    this.cookieService.deleteAll();
    this.cookieService.delete('role', '/');

    // Reload page to see changes
    window.location.reload();

  }
  ngOnInit(): void {

    //TOPMENU SESSION HANDLE
    //Check if is loged on init
    this.isLoged = this.serviceUser.checkCookieSession()
    //Get cookie
    this.myRole  = this.cookieService.get('role'); 
    };
  }