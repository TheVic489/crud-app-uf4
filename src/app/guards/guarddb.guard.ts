import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  UserLoginRegisterService } from '../services/user-login-register.service';

@Injectable({
  providedIn: 'root'
})
//https://codingpotions.com/angular-seguridad
export class MyGuardGuard implements CanActivate {
  constructor(private route:Router, private userLoginRegisterService: UserLoginRegisterService){

  }
  canActivate(route: ActivatedRouteSnapshot) {
    const usuario=this.userLoginRegisterService.usuariData();
    //console.log("erererer",usuario);
    if(usuario!=null){

      return true;
    } 
      this.route.navigate(['/tabla']);
      return false;
  }
  
}