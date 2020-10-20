import { Injectable } from '@angular/core';
import { User } from './usuario';
import { USUARIOS } from './mock-usuario';





@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  usuario : User[];

  constructor() { }

getUsuarios(): User[]{
  return USUARIOS;
}

setUser(usuario:User){
USUARIOS.push(usuario);
}


  }







