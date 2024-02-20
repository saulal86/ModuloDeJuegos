import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import {MatButtonModule} from '@angular/material/button';
import { JuegosComponent } from './juegos/juegos.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { CreadorComponent } from './creador/creador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    JuegosComponent,
    OpcionesComponent,
    CreadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
