import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private toastr: ToastrService  // si lo sigues usando para emailjs
  ) {}

  ngOnInit(): void {
    // Establecer el título de la página
    this.titleService.setTitle(
      'Start Electrical Solutions – Energía Solar y Movilidad Eléctrica'
    );

    // Añadir metaetiquetas básicas para SEO
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Start Electrical Solutions: Instalación de placas fotovoltaicas y puntos de recarga para vehículos eléctricos. ¡Calcula tu ahorro ahora!'
      },
      {
        name: 'keywords',
        content:
          'placas solares, paneles solares, cargadores eléctricos, energía fotovoltaica, movilidad sostenible'
      },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  // (Mantén aquí tu lógica de emailjs/Toastr si la necesitas)
}
