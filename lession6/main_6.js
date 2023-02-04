let odlIndex = 123;
let newIndex = 247;
let sum = newIndex - odlIndex;
function tien(total){
if(total<=50){
    return total*1243 };
if(total>50&& total<=100){
    return ((total-50)*1304+50*1243 )};
if(total>100&& total<=150){
    return ((total-100)*1644+50*1304+50*1243) };
if(total>150&& total<=200){
    return ((total-150)*1806+50*1644+50*1304+50*1243) };
if(total>200&& total<=250){
    return ((total-200)*1976+50*1806+50*1644+50*1304+50*1243) };
if(total>250){
    return ((total-250)*2297+50*1976+50*1806+50*1644+50*1304+50*1243 +'vnd')}};
tien(sum);
//  BTVN 
//  Bài 1 Độ tuổi nhập ngũ 
let gender = 'Nam';
let age = 0;
if( gender==='Nam' && age>=18&& age<=27){
    console.log("Đủ điều kiện nhập ngũ" )}else{
    console.log("Không đủ điều  kiện nhập ngũ")};
//  Bài 2 Tính thu nhập sau thuế 
let salary = 16000000;
if( salary <=0){
  console.log("Nhập lại lương của bạn ?")}
else if( salary>0 && salary<= 11000000){
    console.log(` Số tiền nhận được  là ${salary} VND do không phải đóng thuế `)
}else if(
    salary>11000000&& salary<= 16000000){
    console.log(` Số tiền nhận được sau khi đóng thuế thu nhập là: ${salary*(1-0.05)}`)
}else if(
    salary>16000000&& salary<= 21000000){
    console.log(` Số tiền nhận được sau khi đóng thuế thu nhập là: ${salary*(1-0.1)}`)
}else if(
    salary>21000000&& salary<= 26000000){
    console.log(` Số tiền nhận được sau khi đóng thuế thu nhập là: ${salary*(1-0.15)}`)
}else if(
    salary>26000000&& salary<= 31000000){
    console.log(` Số tiền nhận được sau khi đóng thuế thu nhập là: ${salary*(1-0.2)}`)
}else if(
    salary>31000000){
    console.log(` Số tiền nhận được sau khi đóng thuế thu nhập là: ${salary*(1-0.35)}`)
};
    