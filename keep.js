const addNote = document.querySelector(".add-note");
const lg2 = addNote.querySelector("#lg-2");
const s = document.querySelector("span");


const event1 = () => {
  lg2.className = "fa-solid fa-arrow-right";
  lg2.style.backgroundColor = "transparent";
};
const event2 = () => {
  lg2.className = "fa-solid fa-angle-right";
  lg2.style.backgroundColor = "#ffa500";
};
const updateData = () => {
  const textData = document.querySelectorAll('.text-area');
  const notes = [];
  console.log(textData);
  textData.forEach((curr) => {
    return notes.push(curr.value);
  })
  console.log(notes);
  localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text = "") => {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("section");
  const htmlData = `<div class="note">
    <div class="operation">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div> 
      <div class="text1 ${text ?"":"hidden"} "></div>
      <textarea class="text-area  ${text ? "hidden":""}"></textarea>   
  </div>`;
  noteDiv.insertAdjacentHTML("afterbegin", htmlData);
  console.log(noteDiv);
  const editButton = noteDiv.querySelector(".edit");
  const deleteButton = noteDiv.querySelector(".delete");
  const text1 = noteDiv.querySelector(".text1");
  const textArea = noteDiv.querySelector(".text-area");
  // deleting the note
  deleteButton.addEventListener("click", () => {
    noteDiv.remove();
    updateData();
 
  });
  textArea.value = text;
  text1.innerHTML = text;
  editButton.addEventListener("click", () => {
    text1.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });
  textArea.addEventListener('change', (event) => {
    let values = event.target.value;
    text1.innerHTML = values;
    updateData();  
  })


  document.body.appendChild(noteDiv);
  // it appends a node as the child of a node
};


addNote.addEventListener("mouseover", event1);
addNote.addEventListener("mouseout", event2);
const notes = JSON.parse(localStorage.getItem('notes'));
  console.log(notes);
if(notes){notes.forEach((note)=>addNewNote(note))}
addNote.addEventListener("click", () => addNewNote());




