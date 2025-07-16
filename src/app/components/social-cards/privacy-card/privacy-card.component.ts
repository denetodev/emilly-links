import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LinkButtonComponent } from '../../shared/link-button/link-button.component';
import { PLATFORM_COLORS } from '../../../data/platform-colors';
import {
  SocialLink,
  SocialPlatform,
} from '../../../models/social-link.interface';
import { LinksService } from '../../../services/links.service';

@Component({
  selector: 'app-privacy-card',
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './privacy-card.component.html',
  styleUrl: './privacy-card.component.css',
})
export class PrivacyCardComponent implements OnInit {
  privacyLinks: SocialLink[] = [];
  platformColors = PLATFORM_COLORS.PRIVACY;

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService
      .getLinksByPlatform(SocialPlatform.PRIVACY)
      .subscribe((links) => {
        this.privacyLinks = links;
      });
  }
}
