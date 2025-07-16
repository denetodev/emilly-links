import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  imports: [CommonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css',
})
export class LinkButtonComponent {
  @Input() url!: string;
  @Input() text!: string;
  @Input() iconUrl?: string;
  @Input() badgeText?: string;
  @Input() gradientClass: string = 'from-gray-700 to-gray-600';

  getButtonClasses(): string {
    return `text-white`;
  }
}
