export const readableBookFromBook = (book:IBook,boughtBook:number[]){
	// free or bought
	if(book.price==0 || boughtBook.includes(book.id) ){
		return true;
	}
	return false;
}

export const readableBook = (books:IBook[],book_id:number,boughtBook:number[]){
	const book = books.find((b)=>b.id==book_id);
	return readableBookFromBook(book,boughtBook);
}

export const readableChapter(chapter:IChapter,book:IBook,boughtBook:number[]){
	if(chapter.free || book.price ==0 || boughtBook(book_id)){
		return true;
	}
	return false;
}
