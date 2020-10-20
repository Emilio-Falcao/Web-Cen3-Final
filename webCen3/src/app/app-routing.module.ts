import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { HomeComponent } from './pages/home/home.component';
import { PlaylistDetalhesComponent } from './pages/playlist-detalhes/playlist-detalhes.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: 'playlist', component: PlaylistComponent },
  {path:'detalhes', component:PlaylistDetalhesComponent},
  { path: 'cadastro', component: CadastroComponent },
  {path:'detalhes',component:PlaylistDetalhesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
