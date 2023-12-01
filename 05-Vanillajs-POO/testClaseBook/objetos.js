/*const books = [
  {
    title: "La vida del Lazarillo de Tormes",
    author: "Anonymous",
    published: "1554",
  },
  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },
  {
    title: "The Lords of the Rings",
    author: "J. R. R. Tolkien",
    published: "1554",
  },
  {
    title: "Beowulf",
    author: "Anonymous",
    published: "900",
  },
];*/

export class Book {
  constructor(title, author, published) {
    this.title = title;
    this.author = author;
    this.published = published;
  }

  get getTitle() {
    return `${this.title}`;
  }

  get getAuthor() {
    return `${this.author}`;
  }

  get getPublished() {
    return `${this.published}`;
  }

  set setTitle(title) {
    this.title = title;
  }

  set setAuthor(author) {
   this.author = author;
  }

  set setPublished(published) {
   this.published = published;
  }
}
