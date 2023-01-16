
/* OBJECTS */
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

/* FUNCTIONS AND CONSTRUCTORS */
function Book(title, author, pages, year, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.year = year
    this.read = read
}

function addBookToLibrary(title, author, pages, year, read) {
    if(read) {
        library.push(new Book(title, author, pages, year, true))
    } else {
        library.push(new Book(title, author, pages, year, false))
    }
}




/* VARIABLES */
// button used to toggle inputs section to either display or hide
const newBookBtn = document.querySelector(".add-book");

// connected to div container holding the input fields
const inputsDisplay = document.querySelector(".inputs-container");

// tracks if inputs are showing currently or not
let inputsAreDisplayed = false; 

// button used to submit the input values
const submitInfo = document.querySelector(".lib-submit");

// tbody part of the table
const table = document.querySelector(".lib-body");

// input fields
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const yearInput = document.querySelector("#year");
const readInput = document.getElementById("read");

let isChecked = false;

const clearInputs = document.querySelector(".clear");

/* EVENT LISTENERS */
newBookBtn.addEventListener("click", () => {
    if (inputsAreDisplayed) {
        inputsDisplay.style.display = "none";
        inputsAreDisplayed = false;
    } else {
        inputsDisplay.style.display = "block";
        inputsAreDisplayed = true;
    }
});

submitInfo.addEventListener("click", () => {
    addBookToLibrary(
        titleInput.value, 
        authorInput.value, 
        pagesInput.value,
        yearInput.value,
        isChecked);
})

readInput.addEventListener("click", () => {
    if(isChecked) {
        isChecked = false;
        readInput.value = "off";
    } else {
        isChecked = true;
        readInput.value = "on"
    }
})

clearInputs.addEventListener("click", () => {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    yearInput.value = "";
    readInput.value = "off";
    readInput.checked = false;
    isChecked = false;
})











