import "./style.css"

const bookList = document.getElementById("bookList")
const bookForm = document.getElementById("bookForm")
bookForm.addEventListener("submit", addBook)

loadBooks()

async function addBook(event) {
  event.preventDefault()

  const title = document.getElementById("title").value
  const synopsis = document.getElementById("synopsis").value
  const genre = document.getElementById("genre").value
  const pages = document.getElementById("pages").value

  const newBook = {
    title,
    synopsis,
    genre,
    pages: parseInt(pages),
    progress: 0,
    completed: false,
  }

  await fetch("http://localhost:3000/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook)
  })

  event.target.reset()
  loadBooks()

}

async function loadBooks() {
  const books = await fetch("http://localhost:3000/books").then((res) => res.json())
  displayBooks(books)
}

function displayBooks(books) {
  bookList.innerHTML = ""
  books.forEach((book) => {
    const bookElement = createBookElement(book)
    bookList.appendChild(bookElement)
  })
}

function createBookElement(book) {
  const bookDiv = document.createElement("div")
  bookDiv.classList.add("book")

  if(book.completed) bookDiv.classList.add("completed")

  const bookTitle = document.createElement("h3")
  bookTitle.textContent = book.title

  const genreElement = document.createElement("p")
  genreElement.innerHTML = `<strong/>Gênero:</strong> ${book.genre}`

  const pagesElement = document.createElement("p")
  pagesElement.innerHTML = `<strong>Páginas:</strong> ${book.pages}`

  const progressElement = document.createElement("p")
  progressElement.innerHTML = `<strong>Progresso de Leitura:</strong> ${book.progress / book.pages * 100}%`

  const synopsisElement = document.createElement("p")
  synopsisElement.innerHTML = `<strong>Sinopse:</strong> ${book.synopsis}`

  const editButton = document.createElement("button")
  editButton.textContent = "Atualizar"
  editButton.className = "btn-primary"
  editButton.addEventListener("click", () => editBook(book))

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Excluir"
  deleteButton.className = "btn-danger"
  deleteButton.addEventListener("click", () => deleteBook(book.id))

  bookDiv.appendChild(bookTitle)
  bookDiv.appendChild(genreElement)
  bookDiv.appendChild(pagesElement)
  bookDiv.appendChild(progressElement)
  bookDiv.appendChild(synopsisElement)
  if(!book.completed) bookDiv.appendChild(editButton)
  bookDiv.appendChild(deleteButton)

  return bookDiv
}

async function editBook(book) {
  const progress = parseInt(prompt("Atualzie o progresso de leitura (págs.):"))

  if(isNaN(progress) || progress < 0 || progress > book.pages) {
    return alert ("insira uma quantidade de páginas válida!")
  }

  const completed = book.pages === progress
  const body = JSON.stringify({ progress: parseInt(progress), completed: completed })

  await fetch(`http://localhost:3000/books/${book.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: body,
  })

  loadBooks()
}

async function deleteBook(id) {
  await fetch(`http://localhost:3000/books/${id}`, { method: "DELETE" })
  loadBooks()
}
