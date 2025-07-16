import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  SocialLink,
  SocialPlatform,
} from '../../../models/social-link.interface';
import { LinksService } from '../../../services/links.service';

@Component({
  selector: 'app-telegram-card',
  imports: [CommonModule],
  templateUrl: './telegram-card.component.html',
  styleUrl: './telegram-card.component.css',
})
export class TelegramCardComponent implements OnInit {
  telegramLinks: SocialLink[] = [];
  isLoading = true;

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService.getLinksByPlatform(SocialPlatform.TELEGRAM).subscribe({
      next: (links) => {
        this.telegramLinks = links;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar links do Telegram:', error);
        this.isLoading = false;
      },
    });
  }

  /**
   * Método para rastrear cliques nos links (opcional para analytics)
   */
  trackLinkClick(link: SocialLink): void {
    // Aqui você pode adicionar lógica de analytics
    console.log('Link clicado:', link.displayName);
  }

  /**
   * Método para gerar initials quando não há imagem de perfil
   */
  getInitials(name: string): string {
    return name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  }
}
