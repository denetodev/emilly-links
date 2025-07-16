import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  SocialLink,
  SocialPlatform,
} from '../../../models/social-link.interface';
import { LinksService } from '../../../services/links.service';

@Component({
  selector: 'app-tiktok-card',
  imports: [CommonModule],
  templateUrl: './tiktok-card.component.html',
  styleUrl: './tiktok-card.component.css',
})
export class TikTokCardComponent implements OnInit {
  tiktokLinks: SocialLink[] = [];
  isLoading = true;

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService.getLinksByPlatform(SocialPlatform.TIKTOK).subscribe({
      next: (links) => {
        this.tiktokLinks = links;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar links do TikTok:', error);
        this.isLoading = false;
      },
    });
  }

  /**
   * Método para rastrear cliques nos links (opcional para analytics)
   */
  trackLinkClick(link: SocialLink): void {
    // Aqui você pode adicionar lógica de analytics
    console.log('Link do TikTok clicado:', link.displayName);
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

  /**
   * Método para formatar o username do TikTok
   */
  formatTikTokUsername(username: string): string {
    return username.startsWith('@') ? username : `@${username}`;
  }

  /**
   * Método para validar se é um link válido do TikTok
   */
  isValidTikTokUrl(url: string): boolean {
    return url.includes('tiktok.com') || url.includes('vm.tiktok.com');
  }
}
