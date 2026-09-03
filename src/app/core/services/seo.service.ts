import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

const SITE_NAME = 'Igreja Ebenézer';
const BASE_URL = 'https://ebenezermpa.com';
const DEFAULT_IMAGE = `${BASE_URL}/assets/logo-black.webp`;

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private doc = inject(DOCUMENT);

  update(data: SeoData): void {
    const fullTitle = `${data.title} | ${SITE_NAME}`;
    const url = data.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${data.path}`;
    const image = data.image ?? DEFAULT_IMAGE;

    this.titleService.setTitle(fullTitle);

    const tags: MetaDefinition[] = [
      { name: 'description', content: data.description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: data.description },
      { property: 'og:type', content: data.type ?? 'website' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:site_name', content: SITE_NAME },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: image }
    ];
    tags.forEach(tag => this.metaService.updateTag(tag));

    this.setCanonicalUrl(url);
  }

  private setCanonicalUrl(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
