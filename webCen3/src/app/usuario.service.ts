import { Injectable } from '@angular/core';
import { User } from './usuario';
import { USUARIOS } from './mock-usuario';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  usuario : User[];

  postURL = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

/*getUsuarios(): User[]{
  return USUARIOS;
}*/

/*setUser(usuario:User){
USUARIOS.push(usuario);
}*/

listar() {
  return this.http.get<Array<any>>(this.postURL);
}
criar(usuario:any){
  return this.http.post(this.postURL, usuario);
}

update(){
  
}

  }







