export interface IAdminState {
  loggedIn: boolean;
  name?: string;
  email?: string;
  mobile?: string;
  avatar?: string;
  wallet?: number;
  boughtBooks: number[];
  writtenBooks?: IWrittenBook[];
  writtenChapters?: IWrittenChapter[];
  writtenPosts?: IWrittenPost[];
  invoices?: IInvoice[];
  lastBookId?: number;
  lastChapterId?: number;
}

export interface IWrittenBook {
  id: number;
  title: string;
  abstract: string;
  author: string;
  foreign_author: string;
  img: string;
  genre_id: number;
  price: number;
  date: string;
  created_at: string;
  //---------------------
  save_status: number;
  save_problem_description: string;
}

export interface IWrittenPost {
  id: number;
  title: string;
  author: string;
  img: string;
  abstract: string;
  description: string;
  foreign_author: string;
  created_at: string;
  subject_id: number;
  //------------------
  save_status: number;
  save_problem_description: string;
}

export interface IWrittenChapter {
  id: number;
  title: string;
  free: boolean;
  body: string;
  writtenBook_id: number;
  //----------------------
  save_status: number;
  save_problem_description: string;
}

export interface IInvoice {
  id: number;
  title: string;
  price: number;
  created_at: string;
  bank_code: string;
}
