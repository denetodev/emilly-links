import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/layout/main-layout/main-layout.component';
import { ProfileHeaderComponent } from '../../components/shared/profile-header/profile-header.component';
import { WarningCardComponent } from '../../components/shared/warning-card/warning-card.component';
import { InstagramCardComponent } from '../../components/social-cards/instagram-card/instagram-card.component';
import { PrivacyCardComponent } from '../../components/social-cards/privacy-card/privacy-card.component';
import { TelegramCardComponent } from '../../components/social-cards/telegram-card/telegram-card.component';
import { TiktokCardComponent } from '../../components/social-cards/tiktok-card/tiktok-card.component';

@Component({
  selector: 'app-links',
  imports: [
    CommonModule,
    MainLayoutComponent,
    ProfileHeaderComponent,
    WarningCardComponent,
    InstagramCardComponent,
    TiktokCardComponent,
    TelegramCardComponent,
    PrivacyCardComponent,
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent {
  currentYear: number = new Date().getFullYear();
}
