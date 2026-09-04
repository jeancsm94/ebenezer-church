import { Injectable, signal } from '@angular/core';
import { ChurchEvent } from '../models/church.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
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
