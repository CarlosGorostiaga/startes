import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cargadores',
  templateUrl: './cargadores.component.html',
  styleUrls: ['./cargadores.component.css']
})
export class CargadoresComponent implements OnInit {
  contactMessage: string = '';

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // Ajustar el título de la página
    this.titleService.setTitle(
      'Cargadores de Vehículos Eléctricos – Start Electrical Solutions'
    );

    // Metaetiquetas básicas para SEO
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Ofrecemos cargadores de vehículos eléctricos profesionales para hogares y empresas. Con Start Electrical Solutions, disfruta de una instalación rápida, segura y eficiente.',
      },
      {
        name: 'keywords',
        content:
          'cargadores de vehículos eléctricos, instalación de cargadores, cargadores para coche eléctrico, Start Electrical Solutions',
      },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  updateMessage(message: string) {
    this.contactMessage = message;
    this.scrollToForm(); // Desplazarse al formulario al seleccionar un cargador
  }

  private scrollToForm() {
    setTimeout(() => {
      const element = document.getElementById('contactForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500); // Retraso breve para asegurar que el formulario esté en el DOM
  }

  scrollToCalculadora() {
    setTimeout(() => {
      const elemento = document.getElementById('calculadora');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }
}

