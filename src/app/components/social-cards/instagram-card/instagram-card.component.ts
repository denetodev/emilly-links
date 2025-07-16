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
  platformColors = PLATFORM_COLORS.INSTAGRAM; // Mantido para compatibilidade
  isLoading = true;

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService.getLinksByPlatform(SocialPlatform.INSTAGRAM).subscribe({
      next: (links) => {
        this.instagramLinks = links;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar links do Instagram:', error);
        this.isLoading = false;
      },
    });
  }

  /**
   * Método para rastrear cliques nos links (opcional para analytics)
   */
  trackLinkClick(link: SocialLink): void {
    // Aqui você pode adicionar lógica de analytics específica para Instagram
    console.log('Instagram link clicado:', link.displayName);

    // Exemplo: enviar evento para Google Analytics
    // gtag('event', 'click', {
    //   event_category: 'Instagram',
    //   event_label: link.displayName,
    //   value: 1
    // });
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
   * Método para validar se a URL é um link válido do Instagram
   */
  isValidInstagramUrl(url: string): boolean {
    const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/.+/;
    return instagramRegex.test(url);
  }

  /**
   * Método para extrair o username do Instagram da URL
   */
  extractUsernameFromUrl(url: string): string {
    const match = url.match(/instagram\.com\/([^\/\?]+)/);
    return match ? `@${match[1]}` : '';
  }
}
