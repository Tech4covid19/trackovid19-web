export interface VideoState {
  id: number;
  title: string;
  description: string;
  video: string;
  share: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

export function createShareState(params: Partial<VideoState>) {
  return { ...params } as VideoState;
}
