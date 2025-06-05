import { Component } from '@angular/core';

interface Review {
  name: string;
  avatarUrl: string;
  rating: number; // Puedes usar decimales (p. ej. 4.5)
  text: string;
}

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent {
  // Lista de reseñas (puedes reemplazar estos datos estáticos por una llamada a tu API)
  reviews: Review[] = [
    {
      name: 'Juan Pérez',
      avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
      rating: 4.5,
      text: 'Excelente servicio y profesionalismo. Instalaron nuestras placas solares rápidamente y sin inconvenientes. ¡Muy recomendable!',
    },
    {
      name: 'María García',
      avatarUrl: 'https://randomuser.me/api/portraits/women/25.jpg',
      rating: 5.0,
      text: 'Muy contenta con el resultado. La atención fue excelente y la instalación del cargador de coche fue rápida y sin complicaciones.',
    },
    {
      name: 'Carlos López',
      avatarUrl: 'https://randomuser.me/api/portraits/men/30.jpg',
      rating: 4.8,
      text: 'Los recomiendo totalmente. Muy profesionales y atentos a cada detalle. Estoy muy satisfecho con el servicio.',
    },
    {
      name: 'Ana Martínez',
      avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 4.9,
      text: 'Servicio excepcional y atención al detalle. ¡Mi factura de electricidad ha disminuido considerablemente!',
    },
    {
      name: 'Luis Fernández',
      avatarUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
      rating: 5.0,
      text: 'El equipo fue muy profesional y eficiente. Ahora disfruto de energía renovable en mi hogar.',
    },
    {
      name: 'Laura Gómez',
      avatarUrl: 'https://randomuser.me/api/portraits/women/60.jpg',
      rating: 4.7,
      text: 'Muy satisfecha con el servicio. El proceso fue sencillo y el resultado excelente.',
    },
  ];

  // Función auxiliar para generar estrellas (p. ej. 4.5 → ★★★★☆)
  getStars(rating: number): string[] {
    const stars: string[] = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }
    if (halfStar) {
      stars.push('half');
    }
    while (stars.length < 5) {
      stars.push('empty');
    }
    return stars;
  }
}
