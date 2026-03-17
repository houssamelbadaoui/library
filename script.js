// List where to store all books
const myLibrary = [];

// constructor
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
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

// function to display books
function displayBooks() {
  const container = document.getElementById("library");
  console.log("library container", container);
  console.log("Current MyLibrary", myLibrary);

  container.innerHTML = "";
  myLibrary.forEach((book) => {
    // create card element
    const card = document.createElement("div");
    card.classList.add("book-card");

    // attach id
    card.dataset.id = book.id;

    // fill card content
    card.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author</strong> ${book.author}</p>
    <p><strong>Pages</strong> ${book.pages}</p>
    <p><strong>Status</strong>${book.read ? "Read" : "Not read"}</p>
    <button class="toggle-read">Toggle read</button>
    <button class="remove-book">remove</button>`;

    // add card to container
    container.appendChild(card);
  });
}

// form submission
const form = document.getElementById("bookForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Form submited");

  // get values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  // add Book
  addBookToLibrary(title, author, pages, read);

  // display and update UI
  displayBooks();

  // reset form
  form.reset();
});
