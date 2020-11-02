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
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

import { AngularFireModule} from '@angular/fire/';
import { AngularFireDatabaseModule} from '@angular/fire/database';


import { from } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
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
    LoginComponent,


  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,MatDialogModule, BrowserAnimationsModule,
    HttpClientModule,MatGridListModule,AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
