import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MusicService {
  private http = inject(HttpClient);
  private apiUrl = "https://api.deezer.com";

  search(query: string) {
    return this.http.get(`${this.apiUrl}/search`, {
      params: {
        q: query
      }
    }).pipe(take(1));
  }
}
