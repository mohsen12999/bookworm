import { IBook, IChapter } from "../types/publicTypes";

export const readableBookFromBook = (book: IBook, boughtBook: number[]) => {
  // free or bought
  if (book.price === 0 || boughtBook.includes(book.id)) {
    return true;
  }
  return false;
};

export const readableBook = (
  books: IBook[],
  book_id: number,
  boughtBook: number[]
) => {
  const book = books.find((b) => b.id === book_id);
  return book ? readableBookFromBook(book, boughtBook) : false;
};

export const readableChapterFromBook = (
  chapter: IChapter,
  book: IBook,
  boughtBook: number[]
) => {
  if (chapter.free || book.price === 0 || boughtBook.includes(book.id)) {
    return true;
  }
  return false;
};

export const readableChapter = (
  books: IBook[],
  book_id: number,
  boughtBook: number[],
  chapter?: IChapter
) => {
  const book = books.find((b) => b.id === book_id);
  if (!book || !chapter) return false;
  if (chapter.free || book.price === 0 || boughtBook.includes(book_id)) {
    return true;
  }
  return false;
};
