export interface ASMRChannel {
  name: string;
  url: string;
  subscribers: string;
  category: string;
  description: string;
  thumbnail: string;
  socialLinks?: {
    youtube?: string;
    instagram?: string;
    twitter?: string;
    patreon?: string;
    website?: string;
    twitch?: string;
    discord?: string;
    spotify?: string;
  };
  popularVideos?: {
    title: string;
    url: string;
    views: string;
    thumbnail: string;
  }[];
  about?: string;
  joinedDate?: string;
  totalViews?: string;
  location?: string;
  languages?: string[];
  equipment?: string[];
  uploadSchedule?: string;
}
