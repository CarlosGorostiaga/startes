import { Component } from '@angular/core';

interface Proyecto {
  /** Array de URLs de las imágenes para este proyecto */
  images: string[];
  /** Texto alternativo para cada imagen */
  alts: string[];
  /** Leyenda general del proyecto (se muestra en el overlay) */
  caption: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  proyectos: Proyecto[] = [
    {
      images: [
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
      ],
      alts: [
        'Instalación en vivienda unifamiliar - vista frontal',
        'Instalación en vivienda unifamiliar - vista lateral',
        'Instalación en vivienda unifamiliar - detalle del inversor',
      ],
      caption: 'Vivienda Unifamiliar – 3 kW instalado - Daganzo de Arriba (2024)',
    },
    {
      images: [
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
      ],
      alts: [
        'Bloque de pisos - paneles en tejado',
        'Bloque de pisos - grupo de inversores',
      ],
      caption: 'Comunidad de Vecinos – 10 kW instalado - San Fernando de Henares (2023)',
    },
    {
      images: [
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
      ],
      alts: [
        'Nave Industrial - paneles en cubierta',
        'Nave Industrial - cabinas de inversores',
        'Nave Industrial - medición de rendimiento',
        'Nave Industrial - cuadro de protección',
      ],
      caption: 'Nave Industrial – 25 kW instalado - Torrejon de Ardoz (2024)',
    },
    {
      images: [
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
        'https://res.cloudinary.com/djlp5cdsx/image/upload/v1749129994/proyecto1_g1uhmm.webp',
      ],
      alts: [
        'Empresa Comercial - paneles orientados a sur',
        'Empresa Comercial - sala de inversores',
      ],
      caption: 'Empresa Comercial – 15 kW instalado - Alcala de Henares (2022)',
    },
    // Añade más proyectos según necesites, con su array de imágenes
  ];

  /** Proyecto actualmente abierto en el lightbox */
  selectedProyecto: Proyecto | null = null;
  /** Índice de la imagen actual dentro de selectedProyecto.images */
  selectedIndex: number = 0;

  /**
   * Abre el lightbox para el proyecto seleccionado,
   * comenzando en la imagen de índice 0.
   */
  openLightbox(proyecto: Proyecto) {
    this.selectedProyecto = proyecto;
    this.selectedIndex = 0;
    document.body.style.overflow = 'hidden'; // Desactiva scroll de fondo
  }

  /** Cierra el lightbox */
  closeLightbox() {
    this.selectedProyecto = null;
    document.body.style.overflow = ''; // Restaura scroll
  }

  /** Muestra la imagen anterior (si existe) */
  prevImage() {
    if (!this.selectedProyecto) return;
    const count = this.selectedProyecto.images.length;
    this.selectedIndex = (this.selectedIndex - 1 + count) % count;
  }

  /** Muestra la siguiente imagen (si existe) */
  nextImage() {
    if (!this.selectedProyecto) return;
    const count = this.selectedProyecto.images.length;
    this.selectedIndex = (this.selectedIndex + 1) % count;
  }
}

