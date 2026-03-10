// List where to store all books
const myLibrary = [];

// constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function to add new book created to library
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);
console.log(myLibrary);
