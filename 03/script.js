//*topic - Get element by id, Create Element, Create Text Node, Append Child
//todo Task - Add another FAQ "My New FAQ" to the list

//-----------------------------------------------------------

let nav = document.querySelector(".accordion-homepage");
let section = document.createElement("section");
nav.appendChild(section);
section.className = "parent";
let h3 = document.createElement("h3");
h3.textContent = "My New FAQ";
section.appendChild(h3);
