import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'oracao',
    loadComponent: () => import('./pages/prayer/prayer.component').then(m => m.PrayerComponent)
  },
  {
    path: 'contribuir',
    loadComponent: () => import('./pages/give/give.component').then(m => m.GiveComponent)
  },
  {
    path: 'eventos',
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];