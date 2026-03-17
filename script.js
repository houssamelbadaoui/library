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
const container = document.getElementById("library");
function displayBooks() {
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
const modal = document.getElementById("modal");
const openBtn = document.getElementById("newBookBtn");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("bookForm");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  console.log("CloseBtn clicked");
  modal.classList.add("hidden");
});

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
  modal.classList.add("hidden");
});

// Remove and toggle buttons
container.addEventListener("click", (e) => {
  const card = e.target.closest(".book-card");
  if (!card) return;

  const id = card.dataset.id;

  if (e.target.classList.contains("remove-book")) {
    removeBook(id);
    displayBooks();
  }
  if (e.target.classList.contains("toggle-read")) {
    toggleRead(id);
    displayBooks();
  }
});

// RemoveBook using id
function removeBook(id) {
  const newLibrary = myLibrary.filter((book) => book.id !== id);

  // replace old library with new one
  myLibrary.length = 0;
  myLibrary.push(...newLibrary);
}

function toggleRead(id) {
  // find the book inside the array
  const book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.read = !book.read; // flip true to false
  }
}
