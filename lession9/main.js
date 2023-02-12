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
// ttoongr các sô trong mảng
let arr = [3, 2, 6, 8, 9, 10];

function sumarr(a) {
  let sum1 = 0;
  for (let i = 0; i < a.length; i++) {
    sum1 += a[i];
  }
  console.log("Tổng các số trong mảng là " + sum1);
}
sumarr(arr);
// salary
let employee = [
  { name: "jonh", age: 21, salary: 23000 },
  { name: "vbc", age: 21, salary: 23000 },
  { name: "Thanh ", age: 21, salary: 20000 },
];
function getsum(employees) {
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    sum += employees[i].salary;
  }
  console.log(sum);
}
getsum(employee);
// bai tap chuoi

let str1 = "Vu-ba-chien - Dinh-thi-thanh";
function tranf(str) {
  let newString = " ";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      i++;
      newString += str[i].toUpperCase();
    } else {
      newString += str[i];
    }
  }
  return newString;
}
console.log(tranf(str1));
