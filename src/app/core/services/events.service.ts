import { Injectable, signal } from '@angular/core';
import { ChurchEvent } from '../models/church.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events = signal<ChurchEvent[]>([
  {
    id: '1',
    title: 'Culto de Obreiros',
    date: '2026-11-01',
    time: '18:00h',
    location: 'Rua Carlos Finckler, 100, centro, Vale Real, RS',
    description: 'Culto de Obreiros na Igreja Evangelica Pentecostal Ebenezer.'
  },
  {
    id: '2',
    title: 'Culto de Ceia',
    date: '2026-11-08',
    time: '18:00h',
    location: 'Sede Vale Real',
    description: 'Culto de Ceia na Sede Vale Real.'
  },
  {
    id: '3',
    title: 'Culto Público',
    date: '2026-11-11',
    time: '19:00h',
    location: 'Rua Carlos Finckler, 100, centro, Vale Real, RS',
    description: 'Culto Público.'
  },
  {
    id: '4',
    title: 'Culto do 10º Aniversário da Igreja Ebenezer - Dia 1',
    date: '2026-11-14',
    time: '19:30h',
    location: 'Sede Vale Real',
    description: 'Culto do 10º Aniversário da Igreja Ebenezer. Dirigente: Pra Maria Olita / Pregador: Ap Lucimari Ribeiro. Tema: "Levantai os vossos olhos, e vede os campos, que já estão brancos para a ceifa" (João 4:35b).'
  },
  {
    id: '5',
    title: 'Culto do 10º Aniversário da Igreja Ebenezer - Dia 2',
    date: '2026-11-15',
    time: '09:00h',
    location: 'Sede Vale Real',
    description: 'Culto do 10º Aniversário da Igreja Ebenezer. Dirigente: Pr Carlos Alberto / Pregador: Ap Cesar Martins. Tema: "Levantai os vossos olhos, e vede os campos, que já estão brancos para a ceifa" (João 4:35b).'
  },
  {
    id: '6',
    title: 'Culto Público',
    date: '2026-11-22',
    time: '18:00h',
    location: 'Rua Carlos Finckler, 100, centro, Vale Real, RS',
    description: 'Culto Público.'
  },
  {
    id: '7',
    title: 'Culto Público',
    date: '2026-11-25',
    time: '19:00h',
    location: 'Arroio do Ouro - Casa irmã Silvana',
    description: 'Culto Público realizado em Arroio do Ouro na casa da irmã Silvana.'
  },
  {
    id: '8',
    title: 'Culto Público',
    date: '2026-11-29',
    time: '18:00h',
    location: 'Rua Carlos Finckler, 100, centro, Vale Real, RS',
    description: 'Culto Público.'
  }
]);
}
