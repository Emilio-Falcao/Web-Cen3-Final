import { LocalizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/lista';
import { PlayLista } from 'src/app/mock-musicas';
import { PlaylistService } from 'src/app/servico/playlist.service';




@Component({
  selector: 'app-playlist-detalhes',
  templateUrl: './playlist-detalhes.component.html',
  styleUrls: ['./playlist-detalhes.component.css']
})
export class PlaylistDetalhesComponent implements OnInit {

  
  PlaylistDetalhes= PlayLista;

  listaClicada: Lista;

  
  constructor() {

  }

  ngOnInit(): void {


  }
  onSelect(lista:Lista){
    this.listaClicada = lista;
  }
}
