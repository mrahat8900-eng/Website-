
export type PostType = 'standard' | 'listicle';

export interface ListicleItem {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  type: PostType;
  youtubeId?: string;
  toolUrl?: string;
  items?: ListicleItem[];
  // Advanced SEO Fields
  seoKeywords?: string;
  seoMetaDescription?: string;
}

export interface YoutubeChannel {
  id: string;
  name: string;
  url: string;
}

export interface ContactSettings {
  email: string;
  youtubeChannels: YoutubeChannel[];
}

export interface YoutubeSearchResult {
  id: string;
  title: string;
  thumbnail: string;
}
