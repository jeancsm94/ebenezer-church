import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceSchedule } from '../../core/models/church.model';
import { LiveBannerComponent } from './components/live-banner/live-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LiveBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  schedules = signal<ServiceSchedule[]>([
    { day: 'Domingo', time: '18:00h', title: 'Culto da Família' },
    //{ day: 'Quarta-feira', time: '19:30h', title: 'Culto de Ensino & Oração' }
  ]);
}