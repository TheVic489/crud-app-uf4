import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  constructor(private cookieService: CookieService) {}
  myUsersArray: User[] = [new User('user01', 'pass01', 'comprador', 'pepito@mail.cat',    'Soltero/a',    'Hombre', 'Musica', 'True'),
                          new User('user02', 'pass01', 'comprador', 'alejandra@mail.cat', 'Divorciat/da', 'Mujer',  'Accesoris', 'True'),
                          new User('user03', 'pass01', 'comprador', 'maria@mail.cat',     'Casat/da',     'Hombre', '', 'True'),
     ];

  usernames   = ["Juan", "Pedro", "Miguel", "Andrés", "María", "user01", "user02"];
  correos     = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
  contraseñas = ["contra", "seña", "pass04", "pass02", "pass03", "pass01"];
  roles       = ['comprador', 'admin', 'staff']
  estadoCivil = ['Soltero/a', 'Divorciat/da', 'Casat/da']
  genders     = ['Hombre', 'Mujer', 'Prefriero no decirlo']
  info        = ['', '', 'Accessoris', 'Música']
  
  getUsers() {
    for (let i = 0; i < 50; i++) {
      let usuario: User = {
        username: this.usernames[Math.floor(Math.random() * this.usernames.length)],
        password: this.contraseñas[Math.floor(Math.random() * this.contraseñas.length)],
        email: `usuario${i}@${this.correos[Math.floor(Math.random() * this.correos.length)]}`,
        role: this.roles[Math.floor(Math.random() * this.roles.length)],
        civilStatus: this.estadoCivil[Math.floor(Math.random() * this.estadoCivil.length)],
        gender: this.genders[Math.floor(Math.random() * this.genders.length)],
        info: this.info[Math.floor(Math.random() * this.info.length)],
        conditions: true
      };
      this.myUsersArray.push(usuario);
    }
  }
// Validate and return role of user
validateUser(usern: any, pass: any): string {
  let role = '';
  for (const user of this.myUsersArray) {
    console.log(this.myUsersArray)
    if (user.username === usern && user.password === pass) {
      role = user.role
      this.cookieService.set('username', user.username);
      this.cookieService.set('role', user.role);
    }
  };
  return role
}
  registerUser(user2reg: User): any {
    this.myUsersArray.push(user2reg);
  }

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
