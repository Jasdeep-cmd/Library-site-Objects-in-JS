//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// display constructor
function displayBook() {

}

displayBook.prototype.add = function (book) {
  tableBody = document.getElementById("tableBody");
  console.log(book)
  let inputString =`
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

    tableBody.innerHTML+=inputString;
};

displayBook.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};


displayBook.prototype.validate = function (book) {
  if(book.name.length<2 || book.author.length<2){
      return false;
  }
  else{
      return true;
  }
};


displayBook.prototype.show = function (type,display) {
  let message=document.getElementById('message');
  message.innerHTML=`
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>Message: </strong> ${display}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`;
    
    setTimeout(function(){
        message.innerHTML='';
    },1000);
}



//adding event listner
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  // console.log(book);

  let display = new displayBook();

  if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success',"Your book has been added successfully");
  }
  else{
    display.show('danger',"Invalid Entry");
  }
  
  e.preventDefault();
}
