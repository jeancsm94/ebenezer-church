import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EventsService } from '../../core/services/events.service';
import { LiveBannerComponent } from './components/live-banner/live-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DatePipe, LiveBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private eventsService = inject(EventsService);
  private today = new Date().toISOString().slice(0, 10);

  upcomingEvents = computed(() =>
    this.eventsService.events()
      .filter(event => event.date >= this.today)
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 3)
  );
}
