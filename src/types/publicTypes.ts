export interface IPublicState {
  genres: IGenre[];
  books: IBook[];
  chapters: IChapter[];
  posts: IPost[];
  subjects: ISubject[];
  authors: IAuthor[];
  //-----------------
  popBooks: number[];
  newBooks: number[];
  bestAuthors: number[];
  bestGenres: number[];
  latestPosts: number[];
}

export interface IGenre {
  id: number;
  title: string;
  img: string;
  count: number;
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  img: string;
  genre: number;
  price: number;
  date: string;
}

export interface IChapter {
  id: number;
  title: string;
  free: boolean;
  body: string;
  book_id: number;
}

export interface IPost {
  id: number;
  title: string;
  author: string;
  img: string;
  abstract: string;
  description: string;
  created_at: string;
}

export interface ISubject {
  id: number;
  title: string;
}

export interface IAuthor {
  id: number;
  name: string;
  avatar: string;
  count: number;
}
