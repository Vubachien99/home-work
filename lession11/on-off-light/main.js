let turn_on = document.getElementById("btn_on");
let turn_off = document.getElementById("btn_off");
// let light_off = document.querySelector(".lig_off");
// let light_on = (light_off.src = "./asset/img/pic_bulbon.gif");
// let tranf_off = (light_on.src = "./asset/img/pic_bulboff.gif");
function on() {
  document.querySelector(".lig_off").src = "./asset/img/pic_bulbon.gif";
}
function off() {
  document.querySelector(".lig_off").src = "./asset/img/pic_bulboff.gif";
}
turn_off.addEventListener("click", off);
turn_on.addEventListener("click", on);
