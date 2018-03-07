export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: any[];
  planets: any[];
  starships: any[];
  vehicles: any[];
  species: any[];
  created: Date;
  edited: Date;
  url: string;
}
