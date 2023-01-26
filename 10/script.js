//*topic - querySelector, mouseCover, click eventListner, callback function, style
//todo - Task Target the button and change background color on mouseover

let btn = document.querySelector(".btn-cta-big .login-btn-text");
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "Red";
});
