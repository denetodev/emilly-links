export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  username: string;
  displayName: string;
  description?: string;
  url: string;
  profileImage?: string; // Optional image for each link
  isActive: boolean;
  isBot?: boolean;
  isVip?: boolean;
  mainAccount?: boolean; // To identify the main account for a platform
}

export enum SocialPlatform {
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',
  TELEGRAM = 'telegram',
  PRIVACY = 'privacy',
}
