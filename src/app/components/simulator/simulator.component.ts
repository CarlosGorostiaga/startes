import { Component } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css'],
})
export class SimulatorComponent {
  // Valores vinculados al formulario
  consumo: number | null = null;    // kWh mensuales
  precioKwh: number | null = null; // €/kWh
  area: number | null = null;      // m² disponibles

  // Resultados
  resultadoVisible: boolean = false;
  potenciaReco: number = 0;         // kW recomendados
  ahorroAnual: number = 0;          // € anuales
  anosAmortizacion: number = 0;     // años para amortizar (sin ñ)

  // Para mostrar/ocultar la explicación
  infoVisible: boolean = false;

  // Coste aproximado por kW instalado (€/kW)
  private costoPorKw: number = 1000;      // asunción: 1.000 €/kW instalado

  // Horas equivalentes anuales de producción en España (h/año)
  private horasEquivAnuales: number = 1200; // valor medio para zona centro

  /**
   * Alterna la visibilidad de la explicación de la fórmula.
   */
  toggleInfo(): void {
    this.infoVisible = !this.infoVisible;
  }

  /**
   * Función que se dispara al enviar el formulario.
   * Calcula:
   *  - potenciaReco (kW) en base a área disponible (asume 0.15 kW/m²)
   *  - generación anual (kWh) = potenciaReco * horasEquivAnuales
   *  - ahorroAnual (€) = generación anual * precioKwh
   *  - anosAmortizacion = (potenciaReco * costoPorKw) / ahorroAnual
   */
  calcularAhorro(): void {
    if (
      this.consumo === null ||
      this.precioKwh === null ||
      this.area === null
    ) {
      return;
    }

    // 1) Calcular potencia recomendada (kW)
    //    Asunción: 0.15 kW de potencia pico por cada m² de panel instalado.
    this.potenciaReco = this.area * 0.15;

    // 2) Generación anual estimada (kWh)
    const generacionAnual = this.potenciaReco * this.horasEquivAnuales;

    // 3) Ahorro anual (€)
    this.ahorroAnual = generacionAnual * this.precioKwh;

    // 4) Coste total instalación (€)
    const costeTotal = this.potenciaReco * this.costoPorKw;

    // 5) Años de amortización
    //    Si ahorroAnual = 0 (ej. precioKwh = 0), evitar división por cero
    if (this.ahorroAnual > 0) {
      this.anosAmortizacion = costeTotal / this.ahorroAnual;
    } else {
      this.anosAmortizacion = 0;
    }

    // Mostrar los resultados
    this.resultadoVisible = true;

    // Si la explicación estaba abierta, la cerramos al calcular
    this.infoVisible = false;
  }
}
