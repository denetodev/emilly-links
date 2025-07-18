import { SocialLink, SocialPlatform } from '../models/social-link.interface';

export const EMMILY_LINKS: SocialLink[] = [
  // Instagram
  {
    id: 'insta-main',
    platform: SocialPlatform.INSTAGRAM,
    username: '@opsmilysoy',
    displayName: 'Conta Principal',
    description: 'Siga para não perder nada!',
    url: 'https://www.instagram.com/opsmilysoy',
    profileImage: 'assets/images/profiles/instagram/opsmilysoy.jpg',
    isActive: true,
    mainAccount: true,
  },
  {
    id: 'insta-lives',
    platform: SocialPlatform.INSTAGRAM,
    username: '@milyzinha_live',
    displayName: 'Lives Exclusivas',
    description: 'Acompanhe minhas transmissões ao vivo!',
    url: 'https://www.instagram.com/milyzinha_live',
    profileImage: 'assets/images/profiles/instagram/milyzinha-live.jpg',
    isActive: true,
  },
  {
    id: 'insta-exclusive',
    platform: SocialPlatform.INSTAGRAM,
    username: '@milyops_',
    displayName: 'Conteúdo Exclusivo',
    description: 'Para quem quer um pouco mais!',
    url: 'https://www.instagram.com/milyops_',
    profileImage: 'assets/images/profiles/instagram/milyops.jpg',
    isActive: true,
  },

  // TikTok
  {
    id: 'tiktok-soy',
    platform: SocialPlatform.TIKTOK,
    username: '@opsmilysoy',
    displayName: 'Perfil Principal',
    description: 'Saiba tudo que rola por aqui!',
    url: 'https://www.tiktok.com/@opsmilysoy',
    profileImage: 'assets/images/profiles/tiktok/opsmilysoy.jpg',
    isActive: true,
  },
  {
    id: 'tiktok-soy',
    platform: SocialPlatform.TIKTOK,
    username: '@soyymiilly',
    displayName: 'Me acompanhe',
    description: 'Me acompanhe nos meus momentos!',
    url: 'https://www.tiktok.com/@soyymiilly',
    profileImage: 'assets/images/profiles/tiktok/soyymiilly.jpg',
    isActive: true,
  },
  {
    id: 'tiktok-ops',
    platform: SocialPlatform.TIKTOK,
    username: '@milyx_ops',
    displayName: 'Lives Diárias',
    description: 'Um pouco de tudo pra você!',
    url: 'https://www.tiktok.com/@milyx_ops',
    profileImage: 'assets/images/profiles/tiktok/milyx-ops.jpg',
    isActive: true,
  },
  {
    id: 'tiktok-live',
    platform: SocialPlatform.TIKTOK,
    username: '@milyzinha_live',
    displayName: 'Vídeos e Lives',
    description: 'Diversão e dancinhas garantidas!',
    url: 'https://www.tiktok.com/@milyzinha_live',
    profileImage: 'assets/images/profiles/tiktok/milyzinha-live.jpg',
    isActive: true,
    mainAccount: true,
  },

  // Telegram
  {
    id: 'telegram-bot',
    platform: SocialPlatform.TELEGRAM,
    username: '@Opsmiilyx_bot',
    displayName: 'Bot Oficial',
    description: 'Notícias e interações!',
    url: 'https://t.me/Opsmiilyx_bot',
    profileImage: 'assets/images/profiles/telegram/bot.jpg',
    isActive: true,
    isBot: true,
  },
  {
    id: 'telegram-channel',
    platform: SocialPlatform.TELEGRAM,
    username: '@milyxprevias',
    displayName: 'Canal de Prévias',
    description: 'Conteúdo exclusivo e spoilers!',
    url: 'https://t.me/milyxprevias',
    profileImage: 'assets/images/profiles/telegram/previas.jpg',
    isActive: true,
  },
  {
    id: 'telegram-business',
    platform: SocialPlatform.TELEGRAM,
    username: 'Contato Business',
    displayName: 'Parcerias e Negócios',
    description: 'Fale diretamente comigo!',
    url: 'https://t.me/m/dwOKBHg3Mzkx',
    profileImage: 'assets/images/profiles/telegram/business.jpg',
    isActive: true,
    mainAccount: true,
  },

  // Privacy
  {
    id: 'privacy-main',
    platform: SocialPlatform.PRIVACY,
    username: 'Assinatura Oficial',
    displayName: 'Conteúdo VIP',
    description: 'Desbloqueie todo o meu material exclusivo!',
    url: 'https://privacy.com.br/checkout/opsmilyy',
    profileImage: 'assets/images/profiles/privacy/privacy-avatar.jpg',
    isActive: true,
    isVip: true,
    mainAccount: true,
  },
];
