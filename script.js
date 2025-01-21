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