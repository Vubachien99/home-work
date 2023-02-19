//  bài 1
function check() {
  let arr = [];
  for (let i = 1; i <= 15; i++) {
    if ((i % 3 == 0) & (i < 15)) {
      arr.push("Fizz");
    } else if (i % 5 == 0 && i < 15) {
      arr.push("Buzz");
    } else if (i % 3 == 0 && i % 5 == 0) {
      arr.push("fizzBuzz");
    }
  }
  return arr;
}
console.log(check());

// Bài 2  Đếm kí tự nguyên âm
let str = 123;
function countVowels(a) {
  let count = 0;
  if (typeof a !== "string") {
    console.log("Du lieu dau vao khong hop le!!!");
  }
  for (let i = 0; i < a.length; i++) {
    if (
      a[i] === "e" ||
      a[i] === "u" ||
      a[i] === "o" ||
      a[i] === "a" ||
      a[i] === "i"
    ) {
      count += 1;
    }
    if ((a[i] = "")) {
      count = 0;
      i++;
    }
  }
  return count;
}
// console.log(countVowels(str));
// // function vowel_count(str1) {
// //   var vowel_list = "aeiouAEIOU";
// //   var vcount = 0;

// //   for (var x = 0; x < str1.length; x++) {
// //     if (vowel_list.indexOf(str1[x]) !== -1) {
// //       vcount += 1;
// //     }
// //   }
// //   return vcount;
// // }

// // Bai 3
let array = ["one", "two", "one", "nine", "nine", "ten"];
let newarr = [];
function removeArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!newarr.includes(arr[i])) {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
}
removeArr(array);

// Bài 4
const employeesInfo = [
  { name: "David", workingTime: 98, salary: 10 },
  { name: "Luiz", workingTime: 78, salary: 20 },
  { name: "Silva", workingTime: 165, salary: 25 },
  { name: "Santos", workingTime: 215, salary: 30 },
  { name: "Alex", workingTime: 143, salary: 28 },
];

function getTotallSalary(object) {
  let Sa = 0;
  for (let i = 0; i < object.length; i++) {
    Sa += employeesInfo[i].workingTime * employeesInfo[i].salary;
  }
  return Sa;
}
console.log(getTotallSalary(employeesInfo));
let time = 0;
function Sa_employee(name) {
  for (let i = 0; i < employeesInfo.length; i++) {
    if (name === employeesInfo[i].name) {
      let Sa = 0;
      if (employeesInfo[i].workingTime < 50) {
        Sa = employeesInfo[i].workingTime * employeesInfo[i].salary + 50;
      }
      if (
        employeesInfo[i].workingTime >= 50 &&
        employeesInfo[i].workingTime < 100
      ) {
        Sa = employeesInfo[i].workingTime * employeesInfo[i].salary + 100;
      }
      if (
        employeesInfo[i].workingTime >= 100 &&
        employeesInfo[i].workingTime < 150
      ) {
        Sa = employeesInfo[i].workingTime * employeesInfo[i].salary + 150;
      }
      if (employeesInfo[i].workingTime >= 150) {
        Sa = employeesInfo[i].workingTime * employeesInfo[i].salary + 200;
      }
      return Sa;
    } else {
      time += 1;
      if (time == employeesInfo.length) {
        console.log(" Nhan vien khong ton tai ");
      }
    }
  }
}

console.log(Sa_employee("Alex"));
