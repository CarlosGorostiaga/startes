import { Component, OnInit } from '@angular/core';

interface Servicio {
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[] = [
    {
      titulo: 'Instalación de placas solares en viviendas unifamiliares',
      descripcion: '¿Tienes una vivienda unifamiliar?<br>Disfruta de la tranquilidad de ignorar las subidas de la luz.<br>Ahorra en tu consumo eléctrico con nuestras placas solares.',
      imagen: 'assets/img/ilustrada1.jpeg',
      alt: 'Instalación de placas solares en viviendas unifamiliares'
    },
    {
      titulo: 'Ayudas y subvenciones para la instalación de placas solares',
      descripcion: 'Te informamos sobre las ayudas de las que te puedes beneficiar por la instalación de placas solares.<br>Además, ahora puedes financiarlas hasta en 120 meses.',
      imagen: 'assets/img/ilustrada2.jpeg',
      alt: 'Ayudas y subvenciones para instalación de placas solares'
    },
    {
      titulo: 'Instalación de cargadores para coches eléctricos en viviendas unifamiliares',
      descripcion: '¿Tienes una vivienda unifamiliar?<br>Facilita la carga de tu coche eléctrico con un cargador propio.<br>Ahorra en tus gastos de transporte con nuestra instalación profesional.',
      imagen: 'assets/img/ilustrada3.jpeg',
      alt: 'Instalación de cargadores para coches eléctricos en viviendas'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
