import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/usuario';
import{FormGroup, FormControl, Validators, FormBuilder, EmailValidator,ReactiveFormsModule} from '@angular/forms';
import { UsuarioService } from 'src/app/usuario.service';







@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})



export class CadastroComponent implements OnInit {


formUser: FormGroup;






  constructor(private usuarioServ: UsuarioService, private fb: FormBuilder) {



    }


  ngOnInit(): void {

   this.configurarFormulario();

  
   

  }





inserir(){

  console.log(this.formUser.value);

  this.usuarioServ.setUser(this.formUser.value);

   alert("Cadastrado com sucesso");

    this.formUser.reset(new User());

    
}

configurarFormulario(){
  this.formUser = this.fb.group({
    nome:[null, this.vaidarCampos],
    email:[null, this.vaidarCampos],
    confemail:[null,this.vaidarCampos],
    senha:[null, this.vaidarCampos],
    dataNasc:[''],
    sexo:['']

    

  })
}

vaidarCampos(input: FormControl){

 
  return (input.value ? null : {email : true , nome: true , senha: true, confemail : true});

}
  }







