import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contact = {
    name: '',
    email: '',
    phone: '',        // Nuevo campo de teléfono
    message: ''
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

  onSubmit() {
    // Expresión regular mejorada para correos electrónicos
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validar campos obligatorios
    if (!this.contact.name || !this.contact.email || !this.contact.phone || !this.contact.message) {
      if (!this.contact.name) this.toastr.warning('El campo Nombre es obligatorio.');
      if (!this.contact.email) this.toastr.warning('El campo Correo Electrónico es obligatorio.');
      if (!this.contact.phone) this.toastr.warning('El campo Teléfono es obligatorio.');
      if (!this.contact.message) this.toastr.warning('El campo Mensaje es obligatorio.');
      return;
    }

    // Validar formato del correo electrónico
    if (!emailPattern.test(this.contact.email)) {
      this.toastr.warning('Por favor, introduce un correo electrónico válido.');
      return;
    }

    // Generar un número de contacto aleatorio para el mensaje
    const contactNumber = Math.floor(Math.random() * 100000);

    // Enviar el formulario a través de EmailJS
    emailjs.send(
      'service_qsgiwjg', 
      'template_qv925gd',     
      {
        to_name: 'Equipo de Soporte',
        from_name: this.contact.name,
        user_email: this.contact.email,
        user_phone: this.contact.phone, 
        message: this.contact.message,
        contact_number: contactNumber        
      },
      'KtvvLaza4lO_fmASA'  
    )
    .then((result: EmailJSResponseStatus) => {
      this.toastr.success('¡Gracias por contactarnos! Te responderemos pronto.');
      // Restablecer el formulario después de un envío exitoso
      this.contact = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };

      // Iniciar cuenta regresiva 
      this.startCountdown(); 
    }, (error) => {
      this.toastr.error('Hubo un problema al enviar el mensaje. Inténtalo nuevamente.');
      console.error('Error:', error);
    });
  }

    // Función para iniciar la cuenta regresiva
    startCountdown() {
      let countdown = 2; // Iniciar desde 3
      const interval = setInterval(() => {
        if (countdown > 0) {
          this.toastr.info(`La página se recargará en ${countdown}...`);
          countdown--;
        } else {
          clearInterval(interval); // Detener el intervalo
          location.reload(); // Recargar la página
        }
      }, 1000); // Intervalo de 1 segundo
    }
}