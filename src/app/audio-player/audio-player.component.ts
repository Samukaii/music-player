import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { MusicSearch } from "../../models/music-search";

@Component({
  selector: 'app-musics-item',
  standalone: true,
	imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './musics-item.component.html',
  styleUrl: './musics-item.component.scss'
})
export class MusicsItemComponent {
	@Input({required: true}) music!: MusicSearch;
}
