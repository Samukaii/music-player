import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { Music } from "../models/music";
import { MusicsItemComponent } from "./item/musics-item.component";

@Component({
  selector: 'app-musics-list',
  standalone: true,
	imports: [CommonModule, RouterOutlet, ReactiveFormsModule, MusicsItemComponent],
  templateUrl: './musics-list.component.html',
  styleUrls: ['./musics-list.component.scss']
})
export class MusicsListComponent {
	@Input() musics: Music[] = [];
}
