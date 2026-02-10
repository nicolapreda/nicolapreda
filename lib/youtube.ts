import Parser from 'rss-parser';
import { Video } from '../types';

const parser = new Parser();
export const YOUTUBE_CHANNEL_ID = 'UC1VPT4qglYpXyj1nt_sL2sA';

export async function getLatestVideos(): Promise<Video[]> {
    try {
        const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`);
        const videos: Video[] = feed.items.slice(0, 3).map(item => ({
            id: (item.id.includes(':') ? item.id.split(':')[2] : item.id), // Handle yt:video:ID or just ID
            title: item.title || '',
            link: item.link || '',
            thumbnail: `https://i.ytimg.com/vi/${(item.id.includes(':') ? item.id.split(':')[2] : item.id)}/hqdefault.jpg`
        }));
        return videos;
    } catch (error: any) {
        console.error('Error fetching YouTube feed:', error.message);
        return [];
    }
}

