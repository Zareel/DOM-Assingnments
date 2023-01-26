//todo Fetch all the product name and store in an array

// let arr = [];
// document
//   .querySelectorAll(".as-imagegrid-item")
//   .forEach((item) => arr.push(item.innerText.replace("\nSupport", "")));
// console.log(arr);

// let newarr = [];
// let list = document.querySelectorAll(".list");
// list.forEach((item) => newarr.push(item.innerText.replace("\nSupport", "")));
// console.log(arr);


<ul>
<li>one</li>
<li>two</li>
<li>three</li>
<li>four</li>
<li>five</li>
</ul>

let arr = [];
let list = document.querySelectorAll(".list");
list.forEach((item) => arr.push(item.innerText.replace("\nSupport", "")));
console.log(arr);