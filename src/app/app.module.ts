import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CargadoresComponent } from './pages/cargadores/cargadores.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Recarga1Component } from './components/recarga1/recarga1.component';
import { Recarga2Component } from './components/recarga2/recarga2.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    CargadoresComponent,
    TopBarComponent,
    NavbarComponent,
    Recarga1Component,
    Recarga2Component,
    FormularioContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // Requerido por ngx-toastr
    ToastrModule.forRoot()    // ToastrModule agregado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
