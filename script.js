const myLibrary = [];

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${numberOfPages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };

  this.toggleRead = function () {
    this.read = !this.read;
  };
}

function addBookToLibrary(title, author, numberOfPages, read, library) {
  const newBook = new Book(title, author, numberOfPages, read);
  library.push(newBook);
}

const catcher = new Book("Catcher in The Rye", "J.D. Salinger", 200, true);
const enders = new Book("Ender's Game", "Orson Scott Card", 300, false);
const dune = new Book("Dune", "Frank Herbert", 340, false);
const hitchhiker = new Book(
  "The Hitchhiker's Guide to The Galaxy",
  "Douglas Adams",
  160,
  true
);

myLibrary.push(catcher, enders, dune, hitchhiker);

const libraryGrid = document.querySelector("#library-grid");

function createBookNode(book) {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("class", "book");

  const bookTitle = document.createElement("p");
  bookTitle.textContent = book.title;
  bookTitle.setAttribute("class", "book-title");

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;
  bookAuthor.setAttribute("class", "book-author");

  const bookPages = document.createElement("p");
  bookPages.textContent = `${book.numberOfPages} pages`;
  bookPages.setAttribute("class", "book-pages");

  const bookReadButton = document.createElement("button");
  bookReadButton.setAttribute("class", "book-read");
  bookReadButton.textContent = book.read ? "Read" : "Unread";
  bookReadButton.addEventListener("click", (event) => {
    event.preventDefault();
    book.toggleRead();
    bookReadButton.textContent = book.read ? "Read" : "Unread";
  });

  const removeButton = document.createElement("button");
  removeButton.setAttribute("id", "remove-book");
  removeButton.textContent = "X";
  removeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const indexOfBook = myLibrary.indexOf(book);
    myLibrary.splice(indexOfBook, 1);
    bookDiv.parentNode.removeChild(bookDiv);
    console.log(myLibrary);
  });

  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  bookDiv.appendChild(bookReadButton);
  bookDiv.appendChild(removeButton);

  return bookDiv;
}

function buildLibrary(library) {
  libraryGrid.replaceChildren();
  library.forEach((book, index) => {
    const bookNode = createBookNode(book);
    bookNode.setAttribute("data", index);
    libraryGrid.appendChild(bookNode);
  });
}

buildLibrary(myLibrary);

const showDialogButton = document.querySelector("#show-dialog");
const bookDialog = document.querySelector("dialog");
showDialogButton.addEventListener("click", () => {
  bookDialog.showModal();
});

const bookForm = document.querySelector("#book-form");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookForm);

  addBookToLibrary(
    data.get("title"),
    data.get("author"),
    Number(data.get("pages")),
    data.get("read") === "on" ? true : false,
    myLibrary
  );
  buildLibrary(myLibrary);

  bookForm.reset();
  bookDialog.close();
});
