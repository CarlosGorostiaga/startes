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
import { TarjetasCargadoresComponent } from './components/tarjetas-cargadores/tarjetas-cargadores.component';
import { Solar1Component } from './components2/solar1/solar1.component';
import { Solar2Component } from './components2/solar2/solar2.component';
import { SolarComponent } from './pages/solar/solar.component';
import { ServiciosComponent } from './components2/servicios/servicios.component';
import { StatsComponent } from './components2/stats/stats.component';
import { Adjunto1Component } from './components2/adjunto1/adjunto1.component';
import { FaqComponent } from './components/faq/faq.component';
import { LinealComponent } from './components2/lineal/lineal.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { CalculadoraRecargaComponent } from './components/calculadora-recarga/calculadora-recarga.component';
import { AboutComponent } from './components/about/about.component';

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
    TarjetasCargadoresComponent,
    Solar1Component,
    Solar2Component,
    SolarComponent,
    ServiciosComponent,
    StatsComponent,
    Adjunto1Component,
    FaqComponent,
    LinealComponent,
    FooterComponent,
    SliderComponent,
    CalculadoraRecargaComponent,
    AboutComponent,
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
