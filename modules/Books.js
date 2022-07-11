export default class Books {
  constructor(books) {
    this.books = books || [];
  }

  add = (title, author) => {
    this.books.push({
      title,
      author,
    });
  }

  remove = (title) => {
    this.books = this.books.filter((book) => {
      const newTitleFromArray = book.title.replace(/\s+/g, '');
      return (newTitleFromArray !== title);
    });
  }

  getAll = () => this.books
}
