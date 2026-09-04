export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface PrayerRequest {
  name: string;
  email?: string;
  phone?: string;
  message: string;
  isPrivate: boolean;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  isLive: boolean;
}