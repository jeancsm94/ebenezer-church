import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrayerRequest } from '../../core/models/church.model';

@Component({
  selector: 'app-prayer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prayer.component.html',
  styleUrl: './prayer.component.scss'
})
export class PrayerComponent {
  submitted = signal(false);

  formData: PrayerRequest = {
    name: '',
    email: '',
    phone: '',
    message: '',
    isPrivate: true
  };

  onSubmit() {
    if (this.formData.name && this.formData.message) {
      console.log('Pedido enviado:', this.formData);
      this.submitted.set(true);
    }
  }

  resetForm() {
    this.formData = { name: '', email: '', phone: '', message: '', isPrivate: true };
    this.submitted.set(false);
  }
}