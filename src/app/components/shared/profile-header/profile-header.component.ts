import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  imports: [CommonModule],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css',
})
export class ProfileHeaderComponent implements OnInit {
  randomVideo: string = '';

  ngOnInit(): void {
    // Array of video URLs
    const videos = [
      'assets/videos/emilly-profile-video-1.mp4',
      'assets/videos/emilly-profile-video-2.mp4',
      'assets/videos/emilly-profile-video-3.mp4',
      'assets/videos/emilly-profile-video-4.mp4',
    ];

    const randomIndex = Math.floor(Math.random() * videos.length);
    this.randomVideo = videos[randomIndex];
  }
}
