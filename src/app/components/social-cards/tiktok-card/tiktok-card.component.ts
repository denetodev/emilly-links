import { Component, OnInit } from '@angular/core';
import { PLATFORM_COLORS } from '../../../data/platform-colors';
import {
  SocialLink,
  SocialPlatform,
} from '../../../models/social-link.interface';
import { LinksService } from '../../../services/links.service';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../../shared/link-button/link-button.component';

@Component({
  selector: 'app-tiktok-card',
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './tiktok-card.component.html',
  styleUrl: './tiktok-card.component.css',
})
export class TiktokCardComponent implements OnInit {
  tiktokLinks: SocialLink[] = [];

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService
      .getLinksByPlatform(SocialPlatform.TIKTOK)
      .subscribe((links) => {
        this.tiktokLinks = links;
      });
  }
}
