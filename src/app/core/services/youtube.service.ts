import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { YouTubeVideo } from '../models/church.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private http = inject(HttpClient);

  private apiKey = environment.youtubeApiKey;
  private channelId = environment.youtubeChannelId;

  currentLive = signal<YouTubeVideo | null>(null);

  checkLiveStream() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&type=video&eventType=live&key=${this.apiKey}`;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.items && res.items.length > 0) {
          const item = res.items[0];
          this.currentLive.set({
            id: item.id.videoId,
            title: item.snippet.title,
            isLive: true
          });
        } else {
          this.currentLive.set(null); // Esconde o banner se não houver live
        }
      },
      error: () => this.currentLive.set(null)
    });
  }
}