import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PlaylistDetalhesComponent } from './pages/playlist-detalhes/playlist-detalhes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AjudaComponent,
    HomeComponent,
    PlaylistComponent,
    PlaylistDetalhesComponent,
    CadastroComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,MatDialogModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
