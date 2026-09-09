import { Injectable, signal } from '@angular/core';
import { ChurchEvent } from '../models/church.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events = signal<ChurchEvent[]>([
    {
      id: '1',
      title: 'Dicipulado Online',
      date: '2026-09-09',
      time: '19:00h',
      location: '-',
      description: 'Dicipulado Online.'
    },
    {
      id: '2',
      title: 'Culto Aniversário do Círculo de Oração',
      date: '2026-09-12',
      time: '19:30h',
      location: 'Templo Sede - Igreja Ebenézer',
      description: 'Congresso do Círculo de Oração.'
    },
    {
      id: '3',
      title: 'Dicipulado Online',
      date: '2026-09-16',
      time: '19:00h',
      location: '-',
      description: 'Dicipulado Online.'    
    },
    {
      id: '4',
      title: 'Culto Gaúcho',
      date: '2026-09-20',
      time: '17:00h',
      location: 'Templo Sede - Igreja Ebenézer',
      description: 'Culto Gaúcho.'
    },
    {
      id: '5',
      title: 'Culto Doméstico',
      date: '2026-09-23',
      time: '19:00h',
      location: '-',
      description: 'Culto Doméstico.'
    },
    {
      id: '6',
      title: 'Culto Evangelismo',
      date: '2026-09-27',
      time: '9:30h',
      location: '-',
      description: 'Culto Evangelismo.'
    },
    {
      id: '7',
      title: 'Dicipulado Online',
      date: '2026-09-30',
      time: '19:00h',
      location: '-',
      description: 'Dicipulado Online.'
    },
  ]);
}
