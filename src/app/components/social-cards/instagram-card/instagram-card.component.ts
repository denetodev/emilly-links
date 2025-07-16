import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PLATFORM_COLORS } from '../../../data/platform-colors';
import {
  SocialLink,
  SocialPlatform,
} from '../../../models/social-link.interface';
import { LinksService } from '../../../services/links.service';

@Component({
  selector: 'app-instagram-card',
  imports: [CommonModule],
  templateUrl: './instagram-card.component.html',
  styleUrl: './instagram-card.component.css',
})
export class InstagramCardComponent implements OnInit {
  instagramLinks: SocialLink[] = [];
  platformColors = PLATFORM_COLORS.INSTAGRAM; // Não mais usado para classes, mas pode ser útil para lógica

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService
      .getLinksByPlatform(SocialPlatform.INSTAGRAM)
      .subscribe((links) => {
        this.instagramLinks = links;
      });
  }
}
