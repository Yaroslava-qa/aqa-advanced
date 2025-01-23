import { Book } from './book.js';
export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }
  getFileFormat() {
    return this.fileFormat;
  }

  setFileFormat(fileFormat) {
    if (typeof fileFormat !== 'string') {
      throw new Error('File format must be a string');
    }
    this.fileFormat = fileFormat;
  }
  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}
