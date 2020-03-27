export interface VideoState {
  id: number;
  title: string;
  description: string;
  video: string;
  share: {
    facebook: string;
    whatsapp: string;
    messenger: string;
    linkedin: string;
    twitter: string;
    copyText: string;
  };
}

export function createShareState(params: Partial<VideoState>) {
  return { ...params } as VideoState;
}
