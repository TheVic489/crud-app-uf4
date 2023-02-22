import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  constructor(private cookieService: CookieService) {}

  usernames   = ["Juan", "Pedro", "Miguel", "Andrés", "María", "user01", "user02"];
  correos     = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
  contraseñas = ["contra", "seña", "pass04", "pass02", "pass03", "pass01"];
  roles       = ['comprador', 'admin', 'staff']
  estadoCivil = ['Soltero/a', 'Divorciat/da', 'Casat/da']
  genders     = ['Hombre', 'Mujer', 'Prefriero no decirlo']
  info        = ['', '', 'Accessoris', 'Música']
  

  // registerUser(user2reg: User): any {
  //   this.myUsersArray.push(user2reg);
  // }

  /**
   * Check if cookie role exists
   * @returns Boolean, True if exists, false otherwise
   */
  checkCookieSession(): boolean {
    return this.cookieService.check('role');
  }
  
  // Get and return Cookie role value
  getCookieRole(): string {
    return this.cookieService.get('role')
  }
}
