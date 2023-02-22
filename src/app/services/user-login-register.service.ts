import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../model/User';
import { BehaviorSubject, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserLoginRegisterService {

  //per a la sincronització
  private usuariSubject: BehaviorSubject<User>;
  public  usuario: Observable<User>; 
  
  public usuariData():User{
    return this.usuariSubject.value;
  }

  valorAlmacenado = ''
  usuariStorage = localStorage;
  constructor( private httpclient: HttpClient) {   

  this.usuariSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('usuari')!));//estat inicial del BehaviorSubject
  this.usuario       = this.usuariSubject.asObservable();
  }

  url: string = 'http://localhost:3000'

  // Mètodes de conexió
  validateLogin(username: any, password: any): Observable<any> { 
    // let user2validate = new User('',username,password,'','','',);

    return this.httpclient.post<any>(this.url+"/login", {username: username, password: password}, {responseType: 'json'}).pipe(
      map(res =>{
        console.log("Resposta del servidor");
        console.log(JSON.stringify(res.resultats));

        if(res!=null){
          const user:User = new User(res.resultats.full_name ,res.resultats.username, res.resultats.password, res.resultats.role, res.resultats.email, res.resultats.tel);
          console.log("Objecte Usuari");
          console.log((res.accessToken));
          localStorage.setItem('usuari',JSON.stringify(res.resultats));
          localStorage.setItem('token',(res.accessToken));

          console.log("LocalStorage");
          console.log(localStorage.getItem('usuari'));

          this.usuariSubject.next(user);
        }
        return res;

      })

    );
  }
  // Mètodes de conexió
  registerUser(user: User): Observable<any> { 
    // let user2validate = new User('',username,password,'','','',);
    console.log(user)
    return this.httpclient.post<any>(this.url+"/register", {user: user}, {responseType: 'json'}).pipe(
      map(res =>{
        console.log("Resposta del servidor");
        console.log(JSON.stringify(res.resultats));

        if(res !=null){
          return res;
        }
      })
    );
  }

  deleteAnimal(id:any): Observable<any>{
    //this.u = new User(username, password)
    return this.httpclient.post("http://localhost:3000/delete", {Id:id}, {responseType: "json"});
  }

  getTableData(): Observable<any> {
    return this.httpclient.get('http://localhost:3000/api/bio_table');
  }
  // checkSession(){ 
  //   const valorAlmacenado = localStorage.getItem('usuari');
  //   this.usuariStorage = JSON.parse(this.valorAlmacenado);
  // }

}
