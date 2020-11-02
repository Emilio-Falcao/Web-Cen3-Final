import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDataService {

  constructor() { }


  private usuarioSource = new BehaviorSubject({usuario: null, key:''});

  usuarioAtual = this.usuarioSource.asObservable();

  obtemUsuario(usuario: User, key:string){
this.usuarioSource.next({usuario : usuario, key : key});
  }

}
