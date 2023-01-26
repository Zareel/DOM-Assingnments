//*topic - Get element by id, Create Element, Create Text Node, Append Child
//todo Task - Add another FAQ "My New FAQ" to the list

//-----------------------------------------------------------

let targNav = document.querySelector(".accordion-homepage");
let addNewSection = document.createElement("section");
targNav.appendChild(addNewSection);
addNewSection.className = "parent";
let newh3 = document.createElement("h3");
newh3.textContent = "My New FAQ";
addNewSection.appendChild(newh3);

let nav = document.querySelector(".accordion-homepage");
let newSection = document.createElement("section");
nav.appendChild(newSection);
newSection.className = "parent";
let newh3 = document.createElement("h3");
newh3.textContent = "My New FAQ";
newSection.appendChild(newh3);
