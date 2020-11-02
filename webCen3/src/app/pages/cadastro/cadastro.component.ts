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


usuarios:Array<any>;
usuario:any;



  constructor(private usuarioServ: UsuarioService, private fb: FormBuilder) {



    }


  ngOnInit(): void {

   this.configurarFormulario();
    this.usuario = {};
  
   this.usuarioServ.listar().subscribe(resposta => this.usuarios = resposta);

  }





inserir(){

  console.log(this.formUser.value);

  this.usuarioServ.criar(this.formUser.value).subscribe(resposta=>{
    this.usuarios.push(resposta);
  })

  

   alert("Cadastrado com sucesso");

    this.formUser.reset(new User());

    
}

configurarFormulario(){
  this.formUser = this.fb.group({
    nome:[null, this.vaidarCampos],
    email:['', this.vaidarCampos],
    confemail:['',this.vaidarCampos],
    senha:[null, this.vaidarCampos],
    dataNasc:[''],
    sexo:['']

    

  })
}

vaidarCampos(input: FormControl){

 
  return (input.value ? null : {email : true , nome: true , senha: true, confemail : true});

}
  }







