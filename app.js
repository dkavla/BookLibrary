
let library = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 300,
        year: 1937,
        read: false
    },
    {
        title: "The Godfather",
        author: "Mario Puzo",
        pages: 433,
        year: 1969,
        read: false
    },
    {
        title: "Crime & Punishment",
        author: "Fyodor Dostoevsky",
        pages: 537,
        year: 1866,
        read: false
    }
];

function Book(title, author, pages, year, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.year = year
    this.read = read
}

function addBookToLibrary() {
    let title = prompt("Enter title of book")
    let author = prompt("Enter the author of the book")
    let pages = parseInt(prompt("Enter the # of pages: "))
    let year = parseInt(prompt("Enter the year of release: "))
    let read = prompt("Enter 1 if read and 0 if not: ")
    if(read == "1") {
        library.push(new Book(title, author, pages, year, 1))
    } else {
        library.push(new Book(title, author, pages, year, 0))
    }
}

