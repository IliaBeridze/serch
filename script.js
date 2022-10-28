let container = document.querySelector(".container");
let input = document.querySelector(".input");
let p = document.querySelector(".p");
let img = document.querySelector(".img");

img.addEventListener("click", function() {
  // input.style.width = "6%";
 input.classList.toggle("width")
  // p.style.display = "none";
p.classList.toggle("none")
  // document.querySelector(".input").innerText = input;
});

