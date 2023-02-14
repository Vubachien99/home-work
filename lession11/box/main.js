let credit = document.querySelector(".credit");
let password = document.querySelector(".password");
let notification = document.querySelector("#notification");
function check() {
  if (credit.value === "admin" && password.value === "admin123") {
    alert("Bạn đã đăng nhập thành công");
  } else {
    alert("Bạn đã đăng nhập thất bại, mời đăng nhập lại!");
  }
}
notification.addEventListener("click", check);
