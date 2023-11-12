import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { Music } from "../../models/music";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AudioPlayerService } from "../../audio-player/audio-player.service";

@Component({
	selector: 'app-musics-item',
	standalone: true,
	imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgOptimizedImage, MatButtonModule, MatIconModule],
	templateUrl: './musics-item.component.html',
	styleUrls: ['./musics-item.component.scss']
})
export class MusicsItemComponent {
	@Input({required: true}) music!: Music;
	player = inject(AudioPlayerService);
}
