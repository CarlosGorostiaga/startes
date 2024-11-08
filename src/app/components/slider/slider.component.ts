import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {


  activeCard: 'solar' | 'charging' = 'solar';
  intervalId: any;


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
