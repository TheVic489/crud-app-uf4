import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/model/User';
import { UserLoginRegisterService} from 'src/app/services/user-login-register.service';
import { Animal } from 'src/app/model/Animal';

@Component({
  selector: 'app-compo-table',
  templateUrl: './compo-table.component.html',
  styleUrls: ['./compo-table.component.css']
})
export class CompoTableComponent implements OnInit{

  tableData: any[]=[];
  message!:  string;

  //constructor--> injectar "coses"
  constructor(private myHttpService: UserLoginRegisterService){
  }
  
  selectDeleteRow(id: number) {
    // Set the selectedId variable to the ID of the clicked row
    
    this.myHttpService.deleteAnimal(id).subscribe();
    window.location.reload();
    console.log('Selected ID:', id);
  }
  //En el momento de inicar se hace esta funcion la cual llama a la lista de eventos y crea variables limites para el pagination
  ngOnInit() {
      this.myHttpService.getTableData().subscribe(data => {
        for(let i = 0;i < data.length;i++){
          let res = data[i]
          let animal = new Animal(res['Id'], res['Grup'],res['Familia'],res['Espècie'],res['Origen'],res['Endemisme'],res['Ambient'])
          console.log(animal)
          this.tableData.push(animal)
        }
        console.log(this.tableData)
    })
  
  }};