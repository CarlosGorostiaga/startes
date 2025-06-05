import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CargadoresComponent } from './pages/cargadores/cargadores.component';
import { SolarComponent } from './pages/solar/solar.component';

const routes: Routes = [
  // 1) Home en la raíz
  { path: '', component: HomeComponent },

  // 2) Alias “SEO‐friendly” para home (opcional)
  //    Si quisieras que también exista /startes-home, descomenta esta línea:
  // { path: 'startes-home', redirectTo: '', pathMatch: 'full' },

  // 3) Ruta original (no la toques; aquí siguen apuntando tus botones)
  { path: 'cargadores', component: CargadoresComponent },
  { path: 'solar', component: SolarComponent },

  // 4) Nuevas rutas descriptivas que redirigen a las originales
  { path: 'cargadores-electricos', redirectTo: 'cargadores', pathMatch: 'full' },
  { path: 'placas-fotovoltaicas', redirectTo: 'solar', pathMatch: 'full' },

  // 5) (Opcional) Otra ruta “quienes-somos” o “contacto” si las creas más adelante
  // { path: 'quienes-somos', component: QuienesSomosComponent },
  // { path: 'contacto', component: ContactoComponent },

  // 6) Ruta comodín para “404” (redirige a home)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Esto hace que, al navegar, el scroll se reseteé arriba de la página
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

