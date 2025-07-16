import { Injectable } from '@angular/core';
import { EMMILY_LINKS } from '../data/links.data';
import { SocialLink, SocialPlatform } from '../models/social-link.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  constructor() {}

  getLinksByPlatform(platform: SocialPlatform): Observable<SocialLink[]> {
    const filteredLinks = EMMILY_LINKS.filter(
      (link) => link.platform === platform && link.isActive
    );
    return of(filteredLinks);
  }

  getAllLinks(): Observable<SocialLink[]> {
    return of(EMMILY_LINKS.filter((link) => link.isActive));
  }
}
