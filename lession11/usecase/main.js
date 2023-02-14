let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let money = document.getElementById("money");
let num_people = document.getElementById("num_people");
let btn = document.getElementById("btn");
let mon = 0;
function cacl() {
  mon =
    (Number(bill.value) + Number(bill.value) * Number(tip.value)) /
    Number(num_people.value);
  if (bill.value == "" || tip.value == "" || num_people.value == "") {
    money.innerText = " Vui lập nhập đầy đủ các trường ";
  } else {
    money.innerText = `$ ${mon}`;
  }
  return mon;
}
btn.addEventListener("click", cacl);
