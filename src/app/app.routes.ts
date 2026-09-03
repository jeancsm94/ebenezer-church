import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: {
      seo: {
        title: 'Início',
        description: 'Igreja Evangélica Pentecostal Ebenézer — um lugar de fé, comunhão e restauração em Vale Real, RS. Venha fazer parte da nossa família.',
        path: '/'
      }
    }
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    data: {
      seo: {
        title: 'Sobre Nós',
        description: 'Conheça a história, visão e missão da Igreja Evangélica Pentecostal Ebenézer, em Vale Real, RS. "Até aqui nos ajudou o Senhor" — 1 Samuel 7:12.',
        path: '/sobre'
      }
    }
  },
  // {
  //   path: 'oracao',
  //   loadComponent: () => import('./pages/prayer/prayer.component').then(m => m.PrayerComponent)
  // },
  {
    path: 'contribuir',
    loadComponent: () => import('./pages/give/give.component').then(m => m.GiveComponent),
    data: {
      seo: {
        title: 'Dízimos e Ofertas',
        description: 'Contribua com a Igreja Ebenézer via PIX. "Cada um contribua segundo propôs no seu coração" — 2 Coríntios 9:7.',
        path: '/contribuir'
      }
    }
  },
  {
    path: 'eventos',
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent),
    data: {
      seo: {
        title: 'Eventos',
        description: 'Confira a agenda de próximos eventos, cultos e conferências da Igreja Evangélica Pentecostal Ebenézer em Vale Real, RS.',
        path: '/eventos'
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];