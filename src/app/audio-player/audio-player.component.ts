import { Component, computed, effect, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { AudioPlayerService } from "./audio-player.service";
import { MatSliderModule } from "@angular/material/slider";

const secondsToMinutes = (time: number) => {
	const minutes = Math.floor(time / 60).toString();
	const seconds = Math.floor(time % 60).toString();

	return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`

}

@Component({
	selector: 'app-audio-player',
	standalone: true,
	imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgOptimizedImage, MatIconModule, MatRippleModule, MatButtonModule, MatSliderModule, FormsModule],
	templateUrl: './audio-player.component.html',
	styleUrl: './audio-player.component.scss'
})
export class AudioPlayerComponent {
	player = inject(AudioPlayerService);

	currentTime = computed(() => secondsToMinutes(this.player.audioInfo().currentTime));
	duration = computed(() => secondsToMinutes(this.player.audioInfo().duration));
}
