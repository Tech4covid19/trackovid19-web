import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore, EntityState } from '@datorama/akita';
import { VideoState } from './video-state.model';

export interface VideoStateState extends EntityState<VideoState> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'videoState' })
export class VideoStateStore extends EntityStore<VideoStateState> {
  constructor() {
    super();
  }
}
