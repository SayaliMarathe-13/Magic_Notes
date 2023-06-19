console.log("Hello");
showNotes();

//If we User add notes ..added to the local storage
let addBtn = document.getElementById('addbtn');
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="notecard my-2 mx-2" id="card" style="width: 18rem;">
        <div class="card-body">
        
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button> 
            <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="mx-3 btn btn-info" onclick="myicon()"><svg xmlns="http://www.w3.org/2000/svg" width="16"  height="16" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
            <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
          </svg></button>
            </div>
        </div>
    </div>`;
    })
    // here the this.id points to buttons i.e is on which the this.id get called so here the id of button is passed to 
    // the function deleteNote and the id is index i.e we are passing the index


    let notelem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notelem.innerHTML = html;
    }
    else {
        notelem.innerHTML = `Nothing to show you now "Add some notes to show"`
    }
}
function myicon() {
    console.log("icon clicked");
   let icon= document.getElementById('card');
   icon.style.backgroundColor="yellow";
}

function deleteNotes(index) {
    console.log("Deleting", index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)   //start index and second is how many element to delete
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    console.log("input event fired ----", search.value);
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("P")[0].innerText;
        if (cardtxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    })
});

