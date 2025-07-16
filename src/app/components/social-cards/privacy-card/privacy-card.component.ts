import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LinkButtonComponent } from '../../shared/link-button/link-button.component';
import { PLATFORM_COLORS } from '../../../data/platform-colors';
import {
  SocialLink,
  SocialPlatform,
} from '../../../models/social-link.interface';
import { LinksService } from '../../../services/links.service';

interface PrivacyLink extends SocialLink {
  type?: 'policy' | 'terms' | 'cookies' | 'gdpr' | 'other';
  lastUpdated?: Date;
  isImportant?: boolean;
}

@Component({
  selector: 'app-privacy-card',
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './privacy-card.component.html',
  styleUrl: './privacy-card.component.css',
})
export class PrivacyCardComponent implements OnInit {
  privacyLinks: PrivacyLink[] = [];
  platformColors = PLATFORM_COLORS.PRIVACY;
  isLoading = true;

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService.getLinksByPlatform(SocialPlatform.PRIVACY).subscribe({
      next: (links) => {
        this.privacyLinks = links.map((link) => ({
          ...link,
          type: this.determinePrivacyType(link),
          isImportant: this.isImportantDocument(link),
        }));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar links de privacidade:', error);
        this.isLoading = false;
      },
    });
  }

  /**
   * Método para rastrear cliques nos links (opcional para analytics)
   */
  trackLinkClick(link: PrivacyLink): void {
    // Aqui você pode adicionar lógica de analytics
    console.log(
      'Link de privacidade clicado:',
      link.displayName,
      'Tipo:',
      link.type
    );

    // Opcional: Registrar tipo de documento acessado
    if (link.type) {
      console.log('Tipo de documento:', link.type);
    }
  }

  /**
   * Método para determinar o tipo de link de privacidade
   */
  private determinePrivacyType(
    link: SocialLink
  ): 'policy' | 'terms' | 'cookies' | 'gdpr' | 'other' {
    const url = link.url.toLowerCase();
    const name = link.displayName.toLowerCase();

    if (
      url.includes('privacy') ||
      name.includes('privacidade') ||
      name.includes('política')
    ) {
      return 'policy';
    } else if (
      url.includes('terms') ||
      name.includes('termos') ||
      name.includes('uso')
    ) {
      return 'terms';
    } else if (url.includes('cookies') || name.includes('cookies')) {
      return 'cookies';
    } else if (
      url.includes('gdpr') ||
      name.includes('lgpd') ||
      name.includes('dados')
    ) {
      return 'gdpr';
    }

    return 'other';
  }

  /**
   * Método para determinar se é um documento importante
   */
  private isImportantDocument(link: SocialLink): boolean {
    const importantKeywords = ['política', 'termos', 'lgpd', 'gdpr', 'cookies'];
    return importantKeywords.some((keyword) =>
      link.displayName.toLowerCase().includes(keyword)
    );
  }

  /**
   * Método para obter texto do badge baseado no tipo de documento
   */
  getBadgeText(link: PrivacyLink): string | undefined {
    if (link.isVip) return 'VIP';

    switch (link.type) {
      case 'policy':
        return 'POLÍTICA';
      case 'terms':
        return 'TERMOS';
      case 'cookies':
        return 'COOKIES';
      case 'gdpr':
        return 'LGPD';
      case 'other':
        return link.isImportant ? 'IMPORTANTE' : undefined;
      default:
        return undefined;
    }
  }

  /**
   * Método para validar se é um link de privacidade válido
   */
  isValidPrivacyUrl(url: string): boolean {
    const privacyKeywords = [
      'privacy',
      'policy',
      'terms',
      'cookies',
      'gdpr',
      'lgpd',
    ];
    return privacyKeywords.some((keyword) =>
      url.toLowerCase().includes(keyword)
    );
  }

  /**
   * Método para formatar descrição baseada no tipo
   */
  getFormattedDescription(link: PrivacyLink): string {
    if (link.description) {
      return link.description;
    }

    switch (link.type) {
      case 'policy':
        return 'Política de Privacidade';
      case 'terms':
        return 'Termos de Uso';
      case 'cookies':
        return 'Política de Cookies';
      case 'gdpr':
        return 'Conformidade LGPD/GDPR';
      default:
        return 'Documento de Privacidade';
    }
  }

  /**
   * Método para obter cor do badge baseado no tipo
   */
  getBadgeColor(link: PrivacyLink): string {
    switch (link.type) {
      case 'policy':
        return 'bg-orange-500';
      case 'terms':
        return 'bg-blue-500';
      case 'cookies':
        return 'bg-yellow-500';
      case 'gdpr':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  }
}
