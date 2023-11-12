import { effect, inject, Injectable, signal } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({
	providedIn: "root"
})
export class AudioService {
	private audioElement = inject(DOCUMENT).createElement("audio");
	private currentUrl = signal<string | null>(null);
	private isPlaying = signal(false);

	audioStatus = signal<"playing" | "paused" | "empty">("empty");

	playOnStatusChange = effect(() => {
		if(this.isPlaying()) this.audioElement.play();
		else this.audioElement.pause();
	});

	play(url?: string) {

	}

}
