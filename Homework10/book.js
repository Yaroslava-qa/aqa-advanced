export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getTitle() {
    return this.title;
  }

  setTitle(title) {
    if (typeof title !== 'string') {
      throw new Error('Title must be a string');
    }
    this.title = title;
  }

  getAuthor() {
    return this.author;
  }

  setAuthor(author) {
    if (typeof author !== 'string') {
      throw new Error('Author must be a string');
    }
    this.author = author;
  }

  getYear() {
    return this.year;
  }

  setYear(year) {
    if (typeof year !== 'number' || year <= 0) {
      throw new Error('Year must be a positive number');
    }
    this.year = year;
  }

  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
  }

  static findOldestBook(books) {
    return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest), books[0]);
  }
}


