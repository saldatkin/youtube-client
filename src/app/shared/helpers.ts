import { SearchItem } from './models/search-item';
import { SearchResponse } from './models/search-response';

export function createToken(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let token = '';
  for (let i = 0; i < characters.length; i += 1) {
    token += characters.charAt(Math.floor(Math.random()
  * charactersLength));
  }
  return token;
}

type GetSearchItemsIdsList = (response: SearchResponse) => string;

export const getSearchItemsIdsList: GetSearchItemsIdsList = ({ items }) => items
  .map(
    (item: SearchItem) => item.id,
  )
  .join(',');

const parseYTResponse = (response: SearchResponse) => response.items.map(
  (item: SearchItem) => ({
    id: item.id,
    publishedAt: item.snippet.publishedAt,
    title: item.snippet.title,
    description: item.snippet.description,
    itemPicUrl: item.snippet.thumbnails.high,
    statistics: item.statistics,
  }),
);

export const getYTResponseItemsIdList = (response: SearchResponse) => response.items.map((item: SearchItem) => item.id.videoId).join(',');
export const getParsedYTResponse: any = (response: SearchResponse) => parseYTResponse(response);
