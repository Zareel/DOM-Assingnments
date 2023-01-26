//* Topic - querySelector, eventListener, changingStyles
//todo Task - Target the search box and on hover change the backgound color to red


let searchbox = document.querySelector(".searchinput___19uW0");
searchbox.addEventListener("mouseover", () => { searchbox.style.backgroundColor = 'red'; });