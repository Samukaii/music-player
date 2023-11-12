import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map, Observable, take } from "rxjs";
import { Music } from "../models/music";


@Injectable({
  providedIn: "root"
})
export class MusicService {
  private http = inject(HttpClient);
  private apiUrl = "https://api.deezer.com";

  search(query: string) {
    return this.http.get<{ data: Music[], total: number; next: string}>(`${this.apiUrl}/search`, {
      params: {
        q: query
      }
    }).pipe(
		take(1),
		map(response => ({
			...response,
			data: Object.values(response.data)
		}))
	);
  }
}
