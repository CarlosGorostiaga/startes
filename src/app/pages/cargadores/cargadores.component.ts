// cargadores.component.ts
import { Component, AfterViewInit, OnInit  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cargadores',
  templateUrl: './cargadores.component.html',
  styleUrls: ['./cargadores.component.css']
})
export class CargadoresComponent implements AfterViewInit {
  contactMessage: string = '';

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Cargadores de Vehículos Eléctricos - Start Electrical Solutions');
    this.meta.addTags([
      { name: 'description', content: 'Ofrecemos cargadores de vehículos eléctricos profesionales para hogares y empresas. Con Start Electrical Solutions, disfruta de una instalación rápida, segura y eficiente.' },
      { name: 'keywords', content: 'cargadores de vehículos eléctricos, instalación de cargadores, cargadores para coche eléctrico, Start Electrical Solutions' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  ngAfterViewInit() {
    // No es necesario hacer nada aquí en este caso
  }

  updateMessage(message: string) {
    this.contactMessage = message;
    this.scrollToForm(); // Desplazarse al formulario al seleccionar un cargador
  }

  scrollToForm() {
    setTimeout(() => {
      const element = document.getElementById('contactForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1000); // Agrega un retraso para asegurar que el formulario esté en el DOM
  }

    scrollToCalculadora() {
    // Ponemos un pequeño timeout para garantizar que el DOM esté fully rendered
    setTimeout(() => {
      const elemento = document.getElementById('calculadora');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }
}
