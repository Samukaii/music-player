import { computed, inject, Injectable, signal } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Music } from "../models/music";
import { fromEvent, map } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";

export const audioInfo = (audio: HTMLAudioElement) => {
	const timeUpdateEvent$ = fromEvent(audio, "timeupdate");
	const time = toSignal(timeUpdateEvent$.pipe(map(() => audio.currentTime)), {initialValue: 0});
	const getStatus = () => {
		if(audio.ended) return "ended";
		if(audio.paused) return "paused";
		return "playing"
	};

	return computed(() => {
		const currentTime = time();
		return {
			currentTime,
			status: getStatus(),
			duration: audio.duration
		}
	})
}

@Injectable({
	providedIn: "root"
})
export class AudioPlayerService {
	private audioElement = inject(DOCUMENT).createElement("audio");
	private currentMusicIndex = signal<number>(0);

	currentMusic = computed((): Music | null => {
		const list = this.musicsList();
		const index = this.currentMusicIndex();

		return list[index] || list[0];
	})

	audioInfo = audioInfo(this.audioElement);

	musicsList = signal<Music[]>([]);

	changeTime(time: number) {
		this.audioElement.currentTime = time;
	}

	play(url?: Music) {
		if(url) this.currentMusicIndex.set(this.addToQueue(url))
		this.updateSrc();

		if(!this.currentMusic()) return;

		this.audioElement.play();
	}

	pause() {
		this.audioElement.pause();
	}

	next() {
		this.currentMusicIndex.update(index => {
			if(this.musicsList()[index + 1]) return index + 1;
			else return index;
		})
		this.updateSrc();
		this.play();
	}

	previous() {
		this.currentMusicIndex.update(index => {
			if(this.musicsList()[index + 1]) return index + 1;
			else return index;
		})
		this.updateSrc();
		this.play();
	}

	addToQueue(music: Music) {
		this.musicsList.update(list => {
			if(list.find(item => item.id === music.id)) return list;
			return [music, ...list]
		});

		return this.musicsList().findIndex(item => item.id === music.id);
	}

	private updateSrc() {
		const current = this.currentMusic();
		if(!current) return;

		if(this.audioElement.src !== current.preview)
			this.audioElement.src = current.preview;
	}
}
