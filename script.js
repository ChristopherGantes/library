const myLibrary = [];

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;

  function info() {
    return `${title} by ${author}, ${numberOfPages} pages, ${
      read ? "read" : "not read yet"
    }`;
  }

  function toggleRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary(title, author, numberOfPages, read, library) {
  const newBook = new Book(title, author, numberOfPages, read);
  library.push(newBook);
}

const catcher = new Book("Catcher in The Rye", "J.D. Salinger", 200, true);
const enders = new Book("Ender's Game", "Orson Scott Card", 300, false);

myLibrary.push(catcher, enders);


const libraryGrid = document.querySelector("#library-grid");

for (const book of myLibrary) {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("class", "book")

  const bookTitle = document.createElement("p");
  bookTitle.textContent = book.title;
  bookTitle.setAttribute("class", "book-title")
  
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;
  bookAuthor.setAttribute("class", "book-author")

  const bookPages = document.createElement("p");
  bookPages.textContent = book.numberOfPages;
  bookPages.setAttribute("class", "book-pages")

  const bookRead = document.createElement("p");
  bookRead.textContent = book.read?"Read":"Unread";
  bookRead.setAttribute("class", "book-read")


  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  bookDiv.appendChild(bookRead);

  libraryGrid.appendChild(bookDiv);
}