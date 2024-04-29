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

