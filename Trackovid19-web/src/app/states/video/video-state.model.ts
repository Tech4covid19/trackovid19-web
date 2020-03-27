export interface VideoState {
  id: number;
  title: string;
  description: string;
  video: string;
  share: {
    facebook: string;
    whatsapp: string;
    facebookMessenger: string;
    linkedin: string;
    twitter: string;
    copyLinkText: string;
  };
}

export function createShareState(params: Partial<VideoState>) {
  return { ...params } as VideoState;
}
