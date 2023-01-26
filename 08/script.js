//* Remove element
//todo Task - Remove alternate languages from the home page language listed

let arr = document.querySelector("#SIvCob").children;
for (let i = 0; i < arr.length; i += 1) {
  arr[i].remove();
}
