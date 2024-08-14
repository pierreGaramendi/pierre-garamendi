export interface IResponse {
  movies: IMovie[];
  genres: string[];
}

export interface IMovie {
  id: number;
  title: string;
  description: string;
  genre: string;
  cover?: string;
}
