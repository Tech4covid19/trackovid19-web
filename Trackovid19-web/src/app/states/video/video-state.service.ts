import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { VideoStateStore } from './video-state.store';
import { VideoState } from './video-state.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class VideoStateService {
  public url = environment.apiUrl + 'video';

  constructor(private store: VideoStateStore, private http: HttpClient) {}

  get() {
    return this.http.get<VideoState[]>(`${this.url}/all`).pipe(
      tap(entities => {
        this.store.set(entities);
      }),
    );
  }
}
