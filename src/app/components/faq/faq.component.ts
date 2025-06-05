// faq.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: '¿Cómo consigo los excedentes a 0,08€/kWh?',
      answer: 'Para conseguir los excedentes, debes seguir el proceso adecuado y contactar a nuestros asesores energéticos.',
      open: false
    },
    {
      question: '¿Cuál es la forma de pago?',
      answer: 'Ofrecemos diferentes formas de pago como transferencia, tarjeta de crédito y financiación.',
      open: false
    },
    {
      question: '¿Gestionáis las subvenciones?',
      answer: 'Sí, nos encargamos de todo el proceso de gestión de subvenciones para que tú solo te preocupes por disfrutar de tus ahorros.',
      open: false
    },
    {
      question: '¿Cuánto tiempo tengo que esperar para que me instalen los paneles?',
      answer: 'El tiempo de espera varía según la demanda, pero generalmente se realiza en un plazo de 2 a 4 semanas.',
      open: false
    },
    {
      question: '¿Cómo funciona la Solar Wallet?',
      answer: 'La Solar Wallet te permite almacenar y gestionar tus excedentes de energía de forma sencilla y rentable.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
