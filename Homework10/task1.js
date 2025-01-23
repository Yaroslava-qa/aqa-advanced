import { Book } from './book.js';
import { EBook } from './ebook.js';

const book1 = new Book("Vono", "Jesica Hiko", 1997)
const book2 = new Book("Getroі", "Fico Retso", 2345)
book1.printInfo()
book2.printInfo()

const ebook1 = new EBook("Goliko", "Megan Martiok", 2021, "PDF");
ebook1.printInfo();

ebook1.setTitle("Holiko");
console.log(ebook1.getTitle());

const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log(`Найдавніша книга: ${oldestBook.title}, Рік видання: ${oldestBook.year}`);

const ebook2 = EBook.fromBook(book2, "FLY");
ebook2.printInfo()