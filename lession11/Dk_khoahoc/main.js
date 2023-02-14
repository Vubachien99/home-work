let register = document.querySelector(".success");
let no_register = document.querySelector(".fail");
let btn = document.getElementById("aligment");

btn.addEventListener("click", function () {
  register.classList.add("open");
  no_register.classList.add("close");
});
