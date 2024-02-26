import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { JuegosComponent } from './juegos/juegos.component';
import { CreadorComponent } from './creador/creador.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { PptComponent } from './ppt/ppt.component';
import { SnakeComponent } from './snake/snake.component';

const routes: Routes = [
  {path: '', component:MenuInicialComponent},
  {path: 'juegos', component:JuegosComponent},
  {path: 'opciones', component:OpcionesComponent},
  {path: 'autor', component:CreadorComponent},
  {path: 'ppt', component: PptComponent},
  {path: 'snake', component: SnakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
