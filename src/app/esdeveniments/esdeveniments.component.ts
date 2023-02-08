import { Component, OnInit }   from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { ListEventsServiceService } from 'src/app/services/list-events-service.service';
import { CookieService }       from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Event }  from '../model/Esdeveniments';
import { trigger } from '@angular/animations';
// Comoponente de los Eventos

@Component({
  selector: 'app-esdeveniments',
  templateUrl: './esdeveniments.component.html',
  styleUrls: ['./esdeveniments.component.css'],
})
export class EsdevenimentsComponent implements OnInit {
  constructor( // --> per injectar, serveis, cookies, router
    private serviceUser: UsersServiceService,
    private cookieService: CookieService,
    private router: Router,
    private listeventService: ListEventsServiceService
  ) {}
  
  // Init Variables
  isLogged!: boolean;
  events!:   Event[];
  page:      number = 1;
  myRole!:   string;
  itXpage!:  number;

  filterEvents!:  Event[];
  filterByName!: string;
  filterByPrice!: number ;
  ngOnInit() {
    // Execute Handle session
    this.handleSesison();
    // Get events list
    this.events = this.listeventService.getEvents()
    
    //Get Role
    this.myRole = this.serviceUser.getCookieRole();
  
    this.itXpage = 10;
    this.filterByName = "";
    this.filterByPrice = 100;
    this.filterEvents = this.events;
  }
  // Deletes row for button
  deleteRow(element: any): void {
    this.filterEvents = this.filterEvents.filter(delEvent => delEvent != element)    
  }
  
  // Filter events
  filter() {
    this.filterEvents = this.events.filter(value => {

      if(value.name.indexOf(this.filterByName) != -1) {
        if(value.price <= this.filterByPrice)
        return true;
      }
      return false;
    });
  }


  handleSesison(): void{
    /// HANDLE SESSION ///

    // Reload page to show logout button
    // Reload page if its has been not reloaded yet.
    if (sessionStorage.getItem('reloaded') === null) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
    // If it's not logged, redirect to login
    this.isLogged = this.serviceUser.checkCookieSession();
    if (!this.isLogged) { 
      this.router.navigate(['/login']);
    }
  }
}
