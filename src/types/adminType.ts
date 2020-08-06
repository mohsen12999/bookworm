export interface IAdminState {
  loggedIn: boolean;
  name?: string;
  email?: string;
  mobile?: string;
  avatar?: string;
  wallet?: number;
  boughtBooks: number[];
  writtenBooks?: IWrittenBook[];
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
  save_status: number;
  created_at: string;
}

export interface IWrittenPost {
  id: number;
  title: string;
  author: string;
  img: string;
  created_at: string;
  save_status: number;
  subject_id: number;
}

export interface IInvoice {
  id: number;
  title: string;
  price: number;
  created_at: string;
  bank_code: string;
}
