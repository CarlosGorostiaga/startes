import { Component } from '@angular/core';

interface LogoItem {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-trusted-companies',
  templateUrl: './trusted-companies.component.html',
  styleUrls: ['./trusted-companies.component.css']
})
export class TrustedCompaniesComponent {
  /**
   * Lista de logos a mostrar. Puedes añadir o quitar según las marcas/certificaciones
   * reales de tu cliente. A modo de ejemplo incluyo varios habituales en el sector.
   */
  logos: LogoItem[] = [
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749115597/eplan_aszqnk.png', alt: 'EPLAN' },
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749115605/iso_qo5viw.png', alt: 'ISO Certification' },
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749115614/noverlast_agbbji.png', alt: 'Noverlast' },
    // Ejemplos adicionales (sólo de muestra; sustituye por tus propios archivos):
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749116312/reinhard_yqlbgl.svg', alt: 'TÜV Rheinland' },
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749116311/Conformit%C3%A9_Europ%C3%A9enne__logo_tzx1uf.svg', alt: 'CE Mark' },
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749116308/rohos_ufbjuz.svg', alt: 'RoHS Compliant' },
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749116307/schneider_xc8a8i.svg', alt: 'Schneider Electric' },
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749116309/solar-edge_qk0k18.svg', alt: 'SolarEdge' },
    { src: 'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749116310/abb-1_uu29iy.svg', alt: 'ABB' },
  ];


  /**
   * Para dividir los logos en “diapositivas” de 4 en 4 (puedes cambiar este número)
   */
  getSlides(): LogoItem[][] {
    const chunkSize = 1;
    const slides: LogoItem[][] = [];
    for (let i = 0; i < this.logos.length; i += chunkSize) {
      slides.push(this.logos.slice(i, i + chunkSize));
    }
    return slides;
  }
}