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
/** Componente de la tabla **/
export class CompoTableComponent implements OnInit{

  tableData: any[]=[]; // Data de la tabla 
  myRole!:   string|null;
  //constructor--> injectar "coses"
  constructor(private myHttpService: UserLoginRegisterService, private router: Router){
  }

  // Coje la id de la fila que seleciones y la asigna en el servicio,
  // posteriormente te envia al formulario de edicion
  sendId2Modify(id: any) : void {
    this.myHttpService.id2modify = id;
    this.router.navigate(['/update']);
  }

  //Borra la fila del id que seleciones
  selectDeleteRow(id: number) {
    // Set the selectedId variable to the ID of the clicked row
    
    this.myHttpService.deleteAnimal(id).subscribe();
    window.location.reload();
    console.log('Selected ID:', id);
  }
  //En el momento de inicar hace la peticion al server parar recojer la tabla
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
  
    this.myRole = this.myHttpService.getRole()

  }};