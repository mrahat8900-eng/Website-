
import { YoutubeSearchResult } from '../types.ts';

export const searchYoutube = async (query: string): Promise<YoutubeSearchResult[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return [
    { id: 'dQw4w9WgXcQ', title: 'The Future of AI - Explained', thumbnail: 'https://picsum.photos/seed/yt1/320/180' }
  ].filter(v => v.title.toLowerCase().includes(query.toLowerCase()));
};
