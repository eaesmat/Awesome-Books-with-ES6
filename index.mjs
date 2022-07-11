import Books from './modules/Books.js';

import manageDate from './modules/addDate.js';

import navMenu from './modules/navMenu.js';

const library = new Books(JSON.parse(localStorage.getItem('books')));
window.addEventListener('DOMContentLoaded', () => {
  const awesomeBooks = document.getElementById('awesome-books');
  const booksContainer = document.querySelector('.new-books');
  const titleInput = document.querySelector('.title-input');
  const authorInput = document.querySelector('.author-input');
  const createNewBook = ({ title, author }) => {
    const newBooksDiv = document.createElement('div');
    newBooksDiv.classList.add('added-books');
    const newBookTitle = document.createElement('p');
    const newBookAuthor = document.createElement('p');
    const button = document.createElement('button');
    const titleNoSpace = title.replace(/\s+/g, '');
    const removeId = `remove${titleNoSpace}`;
    const divId = `div${titleNoSpace}`;
    newBooksDiv.setAttribute('id', divId);
    button.innerText = 'Remove';
    button.className = 'remove-btn';
    button.setAttribute('id', removeId);
    newBookTitle.innerText = `${title} by ${author}`;
    newBookAuthor.innerText = author;
    newBooksDiv.append(newBookTitle, button);
    booksContainer.append(newBooksDiv);
  };
  const displayBooks = (books) => {
    booksContainer.innerHTML = '';
    books.forEach(createNewBook);
    localStorage.setItem('books', JSON.stringify(books));
  };
  const booksListAction = (event) => {
    const eventId = event.target.id;
    if (eventId.includes('remove')) {
      const bookTitle = eventId.replace('remove', '');
      library.remove(bookTitle);
      displayBooks(library.getAll());
    }
  };
  awesomeBooks.onsubmit = (event) => {
    event.preventDefault();
    library.add(titleInput.value, authorInput.value);
    displayBooks(library.getAll());
    titleInput.value = '';
    authorInput.value = '';
  };
  document.getElementById('top-books').addEventListener('click', booksListAction);
  displayBooks(library.getAll());
});

manageDate();
navMenu();