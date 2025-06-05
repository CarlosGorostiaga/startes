import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.css']
})
export class SolarComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Establecer el título de la página
    this.titleService.setTitle(
      'Instalación de Placas Fotovoltaicas – Start Electrical Solutions'
    );

    // Añadir metaetiquetas básicas para SEO
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Instalamos placas fotovoltaicas de alta eficiencia para hogares y empresas. Con Start Electrical Solutions, ahorra en tu factura y apuesta por energía limpia.'
      },
      {
        name: 'keywords',
        content:
          'placas fotovoltaicas, paneles solares, instalación solar, energía renovable'
      },
      { name: 'robots', content: 'index, follow' }
    ]);
  }
}

