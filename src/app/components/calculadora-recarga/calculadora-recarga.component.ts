import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora-recarga',
  templateUrl: './calculadora-recarga.component.html',
  styleUrls: ['./calculadora-recarga.component.css']
})
export class CalculadoraRecargaComponent {
  currentStep = 0; // Comenzamos en el paso 0
  totalSteps = 5;  // Número total de pasos

  // Variables para almacenar las respuestas
  postalCode: string = '';
  installationType: string = '';
  hasSolarPanels: string = '';
  distance: string = '';

  // Precio base y ajustes
  basePrice = 500; // Precio base en euros
  priceAdjustment = 0;

  // EventEmitter para enviar el resumen al componente padre
  @Output() calculationCompleted = new EventEmitter<string>();

  // Función para avanzar al siguiente paso
  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
    if (this.currentStep === this.totalSteps) {
      this.calculatePrice();
    }
  }

  // Función para retroceder al paso anterior
  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  // Función para calcular el precio aproximado
  calculatePrice() {
    this.priceAdjustment = this.basePrice;

    // Ajuste según el tipo de instalación
    if (this.installationType === 'vivienda') {
      this.priceAdjustment += 100;
    } else if (this.installationType === 'comunidad') {
      this.priceAdjustment += 200;
    } else if (this.installationType === 'empresa') {
      this.priceAdjustment += 300;
    }

    // Ajuste por paneles solares
    if (this.hasSolarPanels === 'si') {
      this.priceAdjustment += 150;
    }

    // Ajuste por distancia
    if (this.distance === 'menos de 10 metros') {
      this.priceAdjustment += 50;
    } else if (this.distance === '20 metros') {
      this.priceAdjustment += 100;
    } else if (this.distance === '30 metros') {
      this.priceAdjustment += 150;
    } else if (this.distance === 'más de 30 metros') {
      this.priceAdjustment += 200;
    }

    // Emitir el resumen al componente padre
    const summary = `Resumen de tus respuestas:
- Código Postal: ${this.postalCode}
- Tipo de instalación: ${this.installationType}
- ¿Tiene instalación fotovoltaica?: ${this.hasSolarPanels}
- Distancia desde el cuadro de protecciones: ${this.distance}
- Precio aproximado: ${this.priceAdjustment} €

Por favor, contáctame para más detalles.`;

    this.calculationCompleted.emit(summary);
  }

  // Función para reiniciar la calculadora
  startOver() {
    this.currentStep = 0;

    // Restablecer las respuestas
    this.postalCode = '';
    this.installationType = '';
    this.hasSolarPanels = '';
    this.distance = '';
    this.priceAdjustment = 0;
  }

    // Función para desplazarse al formulario de contacto
    scrollToForm() {
      setTimeout(() => {
        const element = document.getElementById('contactForm');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
}
