export interface IPublicState {
  genres: genre[];
  books: book[];
  chapters: chapter[];
  posts: post[];
  subjects: subject[];
  authors: author[];
}

export interface genre {
  id: number;
  title: string;
  img: string;
  count: number;
}

export interface book {
  id: number;
  title: string;
  author: string;
  img: string;
  genre: number;
  price: number;
  date: string;
}

export interface chapter {
  id: number;
  title: string;
  free: boolean;
  body: string;
  book_id: number;
}

export interface post {
  id: number;
  title: string;
  author: string;
  img: string;
  created_at: string;
}

export interface subject {
  id: number;
  title: string;
}

export interface author {
  id: number;
  name: string;
  avatar: string;
  count: number;
}
