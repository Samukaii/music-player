import { inject, Injectable, signal } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { MusicService } from "./music.service";
import { Music } from "../models/music";


@Injectable({
	providedIn: "root"
})
export class MusicRepositoryService {
	musics = signal<Music[]>([]);
	requestsService = inject(MusicService);

	async search(query: string) {
		const resp = await firstValueFrom(this.requestsService.search(query));
		this.musics.set(resp.data);
	}
}
