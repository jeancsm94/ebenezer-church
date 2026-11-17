import { Component, HostListener, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Versionada para que um novo aviso volte a aparecer trocando a chave.
const STORAGE_KEY = 'schedule-announcement-2026-seen';

@Component({
  selector: 'app-schedule-announcement',
  standalone: true,
  templateUrl: './schedule-announcement.component.html',
  styleUrl: './schedule-announcement.component.scss'
})
export class ScheduleAnnouncementComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  isOpen = signal(false);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && localStorage.getItem(STORAGE_KEY) === null) {
      this.isOpen.set(true);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isOpen()) {
      this.close();
    }
  }

  close() {
    this.isOpen.set(false);
    localStorage.setItem(STORAGE_KEY, '1');
  }
}
