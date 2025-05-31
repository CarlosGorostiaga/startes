import { Component } from '@angular/core';

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component {


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

