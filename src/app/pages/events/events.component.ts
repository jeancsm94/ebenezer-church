import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EventsService } from '../../core/services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  private eventsService = inject(EventsService);
  events = this.eventsService.events;
}
