let myLibrary = [];
const form = document.getElementById('create-book')
const list = document.getElementById('list')
const createBook = document.getElementById('new-book').addEventListener('click', showForm);

const book1 = new Book('book1','author_name','title',45,'unread');
const book2 = new Book('book2','author_name','title',45,'unread');
const book3 = new Book('book3','author_name','title',45,'unread');
const book4 = new Book('book4','author_name','title',45,'unread');

function Book(name, author, title, pages, read) {
    this.name = name
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read

    myLibrary.push(this)
  };


function createBookItem() {
  i = 0
  let keys = Object.getOwnPropertyNames(new Book)
  let createTr = document.createElement("tr")
  createTr.setAttribute('id', 'table-head')
  list.appendChild(createTr)
  let tr = document.getElementById('table-head')

  for(j=0; j < keys.length; j++) {
    var th = document.createElement("th")
    th.textContent = `${keys[j]}`
    tr.appendChild(th)
  }
  
  for(i=0; i < myLibrary.length - 1; i++){
  let row = document.createElement('tr')

  let td1 = document.createElement("td")
  td1.textContent = myLibrary[i].name
  td1.setAttribute('id', i)

  let td2 = document.createElement("td")
  td2.textContent = myLibrary[i].author
  td2.setAttribute('id', i)

  let td3 = document.createElement("td")
  td3.textContent = myLibrary[i].title
  td3.setAttribute('id', i)

  let td4 = document.createElement("td")
  td4.textContent = myLibrary[i].pages
  td4.setAttribute('id', i)

  let td5 = document.createElement("td")
  td5.textContent = myLibrary[i].read
  td5.setAttribute('id', i)

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.setAttribute('id', 'delete')

  let readBtn = document.createElement('button');
  readBtn.textContent = 'read';
  readBtn.setAttribute('id', 'read')

  let buttons = document.createElement('div')
  buttons.setAttribute('id', 'bookBtns')

  row.appendChild(td1)
  row.appendChild(td2)
  row.appendChild(td3)
  row.appendChild(td4)
  row.appendChild(td5)
  buttons.appendChild(readBtn)
  buttons.appendChild(deleteBtn)
  row.appendChild(buttons)
  row.setAttribute('id', i)

  list.appendChild(row)
  }
};

function createNewBook() {
  let keys = Object.getOwnPropertyNames(new Book)
  let submitBtn = document.createElement('button')
  submitBtn.innerHTML = 'Submit'
  submitBtn.setAttribute('action', 'submit')
  submitBtn.setAttribute('id', 'submit')

  i = 0

  while(i < keys.length ){
  let label = document.createElement('label')
  let input = document.createElement('input')
  let newLine = document.createElement('br')
  label.textContent = `${keys[i]}: `
  input.setAttribute('id', keys[i])
  input.setAttribute('data-info', i)
  form.appendChild(label)
  form.appendChild(input)
  form.appendChild(newLine)

  i++
  }

  form.appendChild(submitBtn)
}

function showForm() {
  if(form.style.display === 'flex') {
    form.style.display = 'none';
  } else {
    form.style.display = 'flex';
  }
};

createBookItem();
createNewBook();
deleteItems();


function deleteItems() {
  document.querySelectorAll('#delete').forEach(btn => { btn.addEventListener('click', function (event) {
  console.log(event.composedPath()[2].id)
    var id = event.composedPath()[2].id
      Array.from(document.querySelectorAll('tr')).forEach(el => {
        if(el.id == id){
          var row =  el
          console.log(row)
          myLibrary.splice(id, 1)
          row.remove()
          console.log("book deleted!")
        };
      });
    });
  });
};

function newBookAddition(book) {
  let i = myLibrary.length 
  console.log(myLibrary.length)
  let row = document.createElement('tr')

  let td1 = document.createElement("td")
  td1.textContent = book.name
  td1.setAttribute('id', i)

  let td2 = document.createElement("td")
  td2.textContent = book.author
  td2.setAttribute('id', i)

  let td3 = document.createElement("td")
  td3.textContent = book.title
  td3.setAttribute('id', i)

  let td4 = document.createElement("td")
  td4.textContent = book.pages
  td4.setAttribute('id', i)

  let td5 = document.createElement("td")
  td5.textContent = book.read
  td5.setAttribute('id', i)

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.setAttribute('id', 'delete')

  let readBtn = document.createElement('button');
  readBtn.textContent = 'read';
  readBtn.setAttribute('id', 'read')

  let buttons = document.createElement('div')
  buttons.setAttribute('id', 'bookBtns')

  row.appendChild(td1)
  row.appendChild(td2)
  row.appendChild(td3)
  row.appendChild(td4)
  row.appendChild(td5)
  buttons.appendChild(readBtn)
  buttons.appendChild(deleteBtn)
  row.appendChild(buttons)
  row.setAttribute('id', i)

  list.appendChild(row)
}

let bookForm = document.querySelector('#create-book');

bookForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var names = document.getElementById('name').value;
  var author = document.getElementById('author').value;
  var title = document.getElementById('title').value;
  var pages = document.getElementById('pages').value;
  var read = document.getElementById('read').value;
  var thisBook = new Book(names, author, title, pages, read)
  console.log(myLibrary)
  newBookAddition(thisBook)
  deleteItems()
  bookForm.reset()
  showForm()
} )


function readItems() {
  document.querySelectorAll('#read').forEach(btn => { btn.addEventListener('click', function (event) {
  console.log(event.composedPath()[2].id)
    var id = event.composedPath()[2].id
      Array.from(document.querySelectorAll('td')).forEach(el => {
        if(el.innerHTML == 'unread' && el.id == id){
          el.innerHTML = 'read'
          console.log("book read!")
        } else if(el.innerHTML == 'read' && el.id == id) {
          el.innerHTML = 'unread'
        }
      });
    });
  });
};

readItems()