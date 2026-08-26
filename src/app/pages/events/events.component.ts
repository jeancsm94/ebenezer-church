import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChurchEvent } from '../../core/models/church.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events = signal<ChurchEvent[]>([
    {
      id: '1',
      title: 'Conferência de Santa Ceia',
      date: '2026-09-05',
      time: '19:30h',
      location: 'Templo Sede - Igreja Ebenézer',
      description: 'Encontro voltado aos membro da igreja, com momentos de louvor, oração e reflexão sobre a importância da Santa Ceia na vida do cristão.'
    },
    {
      id: '2',
      title: 'Culto de Abertura do Congresso do Círculo de Oração',
      date: '2026-09-12',
      time: '18:00h',
      location: 'Templo Sede - Igreja Ebenézer',
      description: 'Congresso do Círculo de Oração.'
    }
  ]);
}
