import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/usuario';
import{FormGroup, FormControl} from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})



export class CadastroComponent implements OnInit {
formUser: FormGroup;

  constructor() { }
  
//Iniciando o Metodo CreaeForm
  ngOnInit(): void {
    this.creatForm(new User);
  }
//Metodo
creatForm(users: User){
this.formUser = new FormGroup({
  email: new FormControl(users.email),
  confemail: new FormControl(users.confemail),
  senha: new FormControl(users.senha),
  dataNasc: new FormControl(users.dataNasc),
  sexo: new FormControl(users.sexo),
 
});
}
onSubmit(){
  console.log(this.formUser.value);
alert("Cadastrado com sucesso");
this.formUser.reset(new User());
  }
}
