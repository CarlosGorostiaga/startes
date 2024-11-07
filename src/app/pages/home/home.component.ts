import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('statsSection', { static: true }) statsSection!: ElementRef; // Referencia a la sección de estadísticas
  
  contact = {
    name: '',
    email: '',
    phone: '',        // Nuevo campo de teléfono
    message: '',
    terms : ''
  };

  activeCard: 'solar' | 'charging' = 'solar';
  intervalId: any;

  constructor(private toastr: ToastrService) {}


  ngOnInit() {
    this.startCardRotation(); // Iniciar la rotación de tarjetas al cargar el componente
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Limpiar el intervalo al destruir el componente
  }

  startCardRotation() {
    this.intervalId = setInterval(() => {
      this.activeCard = this.activeCard === 'solar' ? 'charging' : 'solar';
    }, 9000); // Cambia cada 5 segundos
  }

}