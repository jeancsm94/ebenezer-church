import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeService } from '../../../../core/services/youtube.service';

@Component({
  selector: 'app-live-banner',
  standalone: true,
  templateUrl: './live-banner.component.html',
  styleUrl: './live-banner.component.scss'
})
export class LiveBannerComponent {
  private youtubeService = inject(YoutubeService);
  private sanitizer = inject(DomSanitizer);

  live = this.youtubeService.currentLive;

  getEmbedUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=0`
    );
  }
}