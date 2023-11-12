import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { MusicRepositoryService } from "./music-repository.service";
import { MusicsListComponent } from "../musics-list/musics-list.component";

@Component({
  selector: 'app-search',
  standalone: true,
	imports: [CommonModule, RouterOutlet, ReactiveFormsModule, MusicsListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
	@Input("search") set setSearch(search: string) {
		if(search) this.repository.search(search);
	};

	repository = inject(MusicRepositoryService);
}
