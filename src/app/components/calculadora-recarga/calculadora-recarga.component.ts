import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora-recarga',
  templateUrl: './calculadora-recarga.component.html',
  styleUrls: ['./calculadora-recarga.component.css'],
})
export class CalculadoraRecargaComponent {
  // ------------------------------
  // Contadores de paso y totales
  // ------------------------------
  currentStep = 0;
  totalSteps = 6;

  // ---------------------------------------------
  // Variables para almacenar las respuestas del usuario
  // ---------------------------------------------
  postalCode: string = '';
  installationType: 'vivienda' | 'comunidad' | '' = '';
  hasSolarPanels: 'si' | 'no' | '' = '';
  floorsDifference: number | null = null;
  distance:
    | 'menos de 10 metros'
    | '20 metros'
    | '30 metros'
    | 'más de 30 metros'
    | '' = '';
  selectedCharger:
    | 'Cargador Básico'
    | 'Cargador Avanzado'
    | 'Cargador Premium'
    | '' = '';

  // ------------------------------
  // Variables para el cálculo
  // ------------------------------
  basePrice = 500;
  priceAdjustment = 0;

  // ** NUEVA PROPIEDAD PARA GUARDAR EL RESUMEN **
  calculationSummary: string = '';

  // EventEmitter para enviar el resumen al componente padre
  @Output() calculationCompleted = new EventEmitter<string>();

  // --------------------------------
  // Avanzar al siguiente paso
  // --------------------------------
  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
    if (this.currentStep === this.totalSteps) {
      this.calculatePrice();
    }
  }

  // --------------------------------
  // Retroceder al paso anterior
  // --------------------------------
  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  // --------------------------------
  // Elegir el tipo de instalación
  // --------------------------------
  chooseType(type: 'vivienda' | 'comunidad') {
    this.installationType = type;
    this.hasSolarPanels = '';
    this.floorsDifference = null;
    this.distance = '';
    this.selectedCharger = '';
    this.nextStep();
  }

  // --------------------------------
  // Fijar la distancia seleccionada
  // --------------------------------
  setDistance(
    value: 'menos de 10 metros' | '20 metros' | '30 metros' | 'más de 30 metros'
  ) {
    this.distance = value;
  }

  // --------------------------------
  // Elegir el cargador
  // --------------------------------
  selectCharger(
    charger: 'Cargador Básico' | 'Cargador Avanzado' | 'Cargador Premium'
  ) {
    this.selectedCharger = charger;
  }

  // --------------------------------
  // Función que hace el cálculo final
  // --------------------------------
  calculatePrice() {
    this.priceAdjustment = this.basePrice;

    // Ajustes según tipo de instalación
    if (this.installationType === 'vivienda') {
      if (this.hasSolarPanels === 'si') {
        this.priceAdjustment -= 150; // Descuento ejemplo
      }
      if (this.distance === 'menos de 10 metros') {
        this.priceAdjustment += 50;
      } else if (this.distance === '20 metros') {
        this.priceAdjustment += 100;
      } else if (this.distance === '30 metros') {
        this.priceAdjustment += 150;
      } else if (this.distance === 'más de 30 metros') {
        this.priceAdjustment += 200;
      }
    } else if (this.installationType === 'comunidad') {
      if (this.floorsDifference !== null) {
        this.priceAdjustment += this.floorsDifference * 75;
      }
      if (this.distance === 'menos de 10 metros') {
        this.priceAdjustment += 50;
      } else if (this.distance === '20 metros') {
        this.priceAdjustment += 100;
      } else if (this.distance === '30 metros') {
        this.priceAdjustment += 150;
      } else if (this.distance === 'más de 30 metros') {
        this.priceAdjustment += 200;
      }
    }

    // Ajuste según el cargador
    switch (this.selectedCharger) {
      case 'Cargador Básico':
        this.priceAdjustment += 300;
        break;
      case 'Cargador Avanzado':
        this.priceAdjustment += 400;
        break;
      case 'Cargador Premium':
        this.priceAdjustment += 500;
        break;
      default:
        break;
    }

    // -------------------------------------------------------
    // Construir el resumen completo y guardarlo en la propiedad
    // -------------------------------------------------------
    const summaryLines = [
      `Código Postal: ${this.postalCode}`,
      `Tipo de instalación: ${this.installationType}`,
    ];

    if (this.installationType === 'vivienda') {
      summaryLines.push(`Instalación fotovoltaica: ${this.hasSolarPanels}`);
    } else if (this.installationType === 'comunidad') {
      summaryLines.push(`Plantas de diferencia: ${this.floorsDifference}`);
    }

    summaryLines.push(`Distancia: ${this.distance}`);
    summaryLines.push(`Cargador elegido: ${this.selectedCharger}`);
    summaryLines.push(`Precio aproximado: ${this.priceAdjustment} €`);
    summaryLines.push(
      `\n*Estos precios son orientativos y sujetos a visita previa de uno de nuestros técnicos.*`
    );

    // Guardamos en la propiedad para emitir más tarde (solo cuando se pulse "Enviar datos")
    this.calculationSummary = summaryLines.join('\n- ');
    
    // ** Aquí ya NO emitimos nada **. Solo guardamos el texto en calculationSummary.
  }

  // --------------------------------
  // NUEVO MÉTODO: enviar datos + desplazar al formulario
  // --------------------------------
  sendData() {
    // Emitir el resumen **solo ahora**, cuando el usuario haga clic en "Enviar datos"
    this.calculationCompleted.emit(this.calculationSummary);

    // Desplazar al formulario de contacto
    this.scrollToForm();
  }

  // --------------------------------
  // Reiniciar la calculadora
  // --------------------------------
  startOver() {
    this.currentStep = 0;
    this.postalCode = '';
    this.installationType = '';
    this.hasSolarPanels = '';
    this.floorsDifference = null;
    this.distance = '';
    this.selectedCharger = '';
    this.priceAdjustment = 0;
    this.calculationSummary = '';
  }

  // --------------------------------
  // (Opcional) Ir al formulario de contacto
  // --------------------------------
  scrollToForm() {
    setTimeout(() => {
      const element = document.getElementById('contactForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  }
}


