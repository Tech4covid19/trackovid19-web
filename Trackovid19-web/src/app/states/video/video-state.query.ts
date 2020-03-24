import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { VideoStateState, VideoStateStore } from './video-state.store';

@Injectable({ providedIn: 'root' })
export class VideoQuerry extends QueryEntity<VideoStateState> {
  constructor(protected store: VideoStateStore) {
    super(store);
  }
}
