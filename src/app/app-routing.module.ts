import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CargadoresComponent } from './pages/cargadores/cargadores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: "cargadores" , component: CargadoresComponent},


  // Agrega más rutas según lo necesites
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
