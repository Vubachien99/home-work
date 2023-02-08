// bài tập kiểm tra sô nguyên tố
let n = 11;
for (let i = 2; i < Math.sqrt(n); i++) {
  if (n >= 2 && n % i !== 0) {
    console.log("Đây là số nguyên tố");
    break;
  } else {
    console.log("Dấy không phải sô nguyên tố ");
  }
}
// bài tập tính tổng các ước của một so tự nhiên
let m = 9;
let sum = 0;
for (let i = 0; i < m; i++) {
  if (m % i == 0) {
    sum += i;
  }
}
console.log(`tổng các ước của ${m} là: ${sum}`);

// Bài tập kiểm tra số chính phương
let a = 9;

function checkCP(x) {
  for (let j = 0; j < x; ) {
    if (x >= 0 && x == j * j) {
      console.log("Day la so chinh phuong");
      return true;
    }
    j++;
  }
  console.log("Day khong phai so chinh phuong");
  return false;
}
checkCP(9);
