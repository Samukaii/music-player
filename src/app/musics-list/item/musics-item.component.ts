import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { MusicRepositoryService } from "./music-repository.service";
import { MusicSearch } from "../models/music-search";

@Component({
  selector: 'app-search',
  standalone: true,
	imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './musics-list.component.html',
  styleUrl: './musics-list.component.scss'
})
export class MusicsListComponent {
	@Input() musics: MusicSearch;
}
