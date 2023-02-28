import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../model/User';
import { Animal } from '../model/Animal';
import { BehaviorSubject, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

// Servicio que maneja la comunicacion entre el servidor y el cliente
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

  //ID del animal para modificar
  id2modify: any;

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
          console.log((res.resultats));

          console.log("Token");
          console.log((res.accessToken));
          
          localStorage.setItem('usuari',JSON.stringify(res.resultats));
          localStorage.setItem('token',(res.accessToken));
          localStorage.setItem('role',(res.resultats[0].role));

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
  
  updateAanimal(id: any, grup: any, familia: any, especie: any , origen: any, endemisme: any, ambient:  any ){
    return this.httpclient.post<Animal>(this.url+'/update',{'id': id, 'grup': grup, 'familia':familia, 'especie': especie, 'origen': origen,'endemisme':endemisme, 'ambient': ambient },{responseType:'json'})
  }
  deleteAnimal(id:any): Observable<any>{
    //this.u = new User(username, password)
    return this.httpclient.post("http://localhost:3000/delete", {Id:id}, {responseType: "json"});
  }

  selectAnimal(id: any) : Observable<any>{

    return this.httpclient.post("http://localhost:3000/select-where", {id:id}, {responseType: "json"});
  }
  getTableData(): Observable<any> {
    return this.httpclient.get('http://localhost:3000/api/bio_table');
  }

  checkSession(){ 
    return localStorage.getItem('usuari') ? true : false;
  } 

  getRole(){ 
    return localStorage.getItem('role');
  } 
}
