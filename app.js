const newBtn = document.querySelector(".add-book"); // the button for inputting new books
newBtn.addEventListener("click", showInputField);

const addBtn = document.querySelector(".add"); // button to add new book to library
addBtn.addEventListener("click", addBookToLibrary);

const read = document.getElementById("read"); // button for checking if book was read
let isRead = false;
read.addEventListener("click", () => {
    if(isRead) {
        read.checked = false;
        isRead = false;
    } else {
        read.checked = true;
        isRead = true;
    }
})

const inputs = document.querySelectorAll('.book-input');
const inputsForm = document.querySelector(".inputs-container");
let myLibrary = [
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        pages: 537,
        year: 1953,
        read: false
    }
];

let newBook;

// constructor
function Book(title, author, pages, year, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = read;
}

// adds the newly created book to myLibrary
function addBookToLibrary() {
    newBook = new Book(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value,
        inputs[4].checked
    )
    myLibrary.push(newBook);
    render();
    clearInput();
}

// loads the books to the container
function render() {
    const lib = document.querySelector(".lib-container");
    const cards = document.querySelectorAll('.book');
    // clear the library book display container
    cards.forEach(book => {
        lib.removeChild(book)
    });

    for (let i=0; i < myLibrary.length; i++)
    {
        createBook(myLibrary[i]);
    }
}

function createBook(item) {
    const lib = document.querySelector(".lib-container");

    const card = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const yearDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    card.className = 'book';
    card.classList.add('book');
    card.setAttribute("id", myLibrary.indexOf(item));
    
    titleDiv.textContent = `${item.title}`;
    titleDiv.classList.add('title');
    card.appendChild(titleDiv);

    authorDiv.textContent = `By ${item.author}`;
    authorDiv.classList.add('author');
    card.appendChild(authorDiv);

    pageDiv.textContent = `${item.pages} pages`;
    pageDiv.classList.add('pages');
    card.appendChild(pageDiv);

    yearDiv.textContent = `Published in ${item.year}`;
    yearDiv.classList.add('year');
    card.appendChild(yearDiv);
    
    readBtn.setAttribute("id", "readBtn");
    card.appendChild(readBtn);
    if(item.read == true) {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = '#1CD867';
    } else {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#EC2143';
    }

    // add click listener so that the button changes to Read or Not Read
    readBtn.addEventListener("click", () => {
        item.read = !item.read;
        if(item.read == true) {
            readBtn.textContent = "Read";
            readBtn.style.backgroundColor = '#1CD867';
        } else {
            readBtn.textContent = 'Not Read';
            readBtn.style.backgroundColor = '#EC2143';
        }
    });

    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("id", "removeBtn");
    card.appendChild(removeBtn);

    // add click listener so that it removes button from 
    removeBtn.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        render(); // reloads the books to library container
    });

    // add the book to the library
    lib.appendChild(card);

}

// displays the container of input fields
function showInputField() {
    inputsForm.style.display = "block";
};

function hideInputField(){
    inputsForm.style.display = "none";
}

// clears input screen
function clearInput() {
    for (let i=0; i < inputs.length - 1; i++)
    {
        inputs[i].value = "";
    }
    inputs[inputs.length - 1].checked = false;
    isRead = false;
    hideInputField();
}

render();