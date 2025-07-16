import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocialLink, SocialPlatform } from '../../../models/social-link.interface';
import { LinksService } from '../../../services/links.service';
import { LinkButtonComponent } from '../../shared/link-button/link-button.component';

@Component({
  selector: 'app-telegram-card',
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './telegram-card.component.html',
  styleUrl: './telegram-card.component.css',
})
export class TelegramCardComponent implements OnInit {
  telegramLinks: SocialLink[] = [];

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService
      .getLinksByPlatform(SocialPlatform.TELEGRAM)
      .subscribe((links) => {
        this.telegramLinks = links;
      });
  }
}
