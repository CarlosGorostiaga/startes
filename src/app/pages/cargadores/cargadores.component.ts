// cargadores.component.ts
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cargadores',
  templateUrl: './cargadores.component.html',
  styleUrls: ['./cargadores.component.css']
})
export class CargadoresComponent implements AfterViewInit {
  contactMessage: string = '';

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
}
