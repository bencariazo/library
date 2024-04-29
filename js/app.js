const myLibrary = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295)
myLibrary.push(theHobbit)

function addBookToLibrary() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('card-item')
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X"
    deleteBtn.classList.add("btn-delete")
    newDiv.classList.add('card-item')

    for(let i=0; i<myLibrary.length; i++){
        console.log(i)
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
    }

    newDiv.append(title)
    newDiv.append(author)
    newDiv.append(pages)
    newDiv.append(deleteBtn)
    cardsContainer.append(newDiv)

}

const cardsContainer = document.querySelector('.cards-container')
const addBtn = document.querySelector('#add-btn')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnSubmit = document.querySelector('#btn-submit')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const isRead = document.querySelector('#is-read')
const login = document.querySelector('#login-btn')
const form = document.querySelector('.add-book-form')
const deleteModal = document.querySelector('.delete-modal')

function addBookModal() {
    overlay.classList.add('active')
    modal.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

addBtn.addEventListener('click', addBookModal)
overlay.addEventListener('click', closeModal)
login.addEventListener('click', (e) => {
    e.preventDefault()
})

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const newBook = new Book(title.value, author.value, pages.value)
    myLibrary.push(newBook)
    addBookToLibrary();
    closeModal()
})

addBookToLibrary();