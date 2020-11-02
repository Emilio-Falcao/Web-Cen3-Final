import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  usuarios: any;

  constructor( private usuarioService: UsuarioService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }
logar(){

  let form = this.formulario;

  this.usuarioService.criar(form.value).subscribe(resposta=>{
    this.usuarios.push(resposta);
    window.location.href = '/';
  });

}
}
