import { Component, Input, Output, EventEmitter } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-tarjetas-cargadores',
  templateUrl: './tarjetas-cargadores.component.html',
  styleUrls: ['./tarjetas-cargadores.component.css']
})
export class TarjetasCargadoresComponent {
  @Input() cargadores = [
    {
      name: 'Ohme Home Pro',
      price: 1630,
      discountedPrice: 489,
      features: ['El más compacto', 'El más económico'],
      imageUrl: 'assets/img/cargador2.png',
      specifications: [
        'Compacto: Más pequeño que un tostador y más ligero que un portátil',
        'Conectado: Control a través de app y conexión 4G',
        'Programa tus cargas: Horas más baratas',
        'Todo en uno: Balanceo de carga y carga con placas solares'
      ]
    },
    {
      name: 'Wallbox Pulsar Plus',
      price: 1999,
      discountedPrice: 599,
      features: ['Carga rápida', 'Control de carga inteligente'],
      imageUrl: 'assets/img/cargador4.png',
      specifications: [
        'Potencia ajustable hasta 22kW para carga rápida',
        'Conectividad Wi-Fi y Bluetooth',
        'Compatible con app para programar y controlar la carga',
        'Resistente al agua y polvo (IP54), ideal para exteriores'
      ]
    },
    {
      name: 'Tesla Wall Connector',
      price: 450,
      discountedPrice: 135,
      features: ['Diseño elegante', 'Compatible con vehículos Tesla'],
      imageUrl: 'assets/img/cargador3.png',
      specifications: [
        'Potencia de carga hasta 11kW',
        'Cable de carga integrado de 7,3 metros',
        'Conexión Wi-Fi para actualizaciones automáticas',
        'Ideal para uso residencial y comercial'
      ]
    }
  ];

  @Output() chargerSelected = new EventEmitter<string>();

  selectedCharger: any = null;

  openModal(cargador: any) {
    this.selectedCharger = cargador;
    const modalElement = document.getElementById('chargerModal')!;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  chooseCharger(cargador: any) {
    const message = `Hola, estaba interesado en el cargador ${cargador.name}.`;
    this.chargerSelected.emit(message); // Emitir el mensaje seleccionado

    // Cerrar el modal si está abierto
    const modalElement = document.getElementById('chargerModal')!;
    if (bootstrap.Modal.getInstance(modalElement)) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    }
  }
}