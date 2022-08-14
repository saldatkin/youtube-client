export interface SearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics
}

export interface ISnippet {
  publishedAt: Date | string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: {
    default: IThumbnail,
    medium: IThumbnail,
    high: IThumbnail,
    standard: IThumbnail,
    maxres: IThumbnail,
  }
  channelTitle: string,
  tags: string[];
  categoryId: string,
  liveBroadcastContent: string,
  defaultLanguage?: string;
  localized: {
    title: string,
    description: string
  }
  defaultAudioLanguage: string,
}

interface IThumbnail {
  url: string,
  width: number,
  height: number
}

interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}
