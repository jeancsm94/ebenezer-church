import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeService } from '../../../../core/services/youtube.service';

@Component({
  selector: 'app-live-banner',
  standalone: true,
  templateUrl: './live-banner.component.html',
  styleUrl: './live-banner.component.scss'
})
export class LiveBannerComponent implements OnInit {
  private youtubeService = inject(YoutubeService);
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);

  live = this.youtubeService.currentLive;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.youtubeService.checkLiveStream();
    }
  }

  getEmbedUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=0`
    );
  }
}