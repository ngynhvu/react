// let arr = [2, 5, 4, 3, 7];

// Duyệt
// arr.forEach((item, index) => {
//     console.log(item);
// })

//Thay đổi giá trị => map (sử dụng cực kỳ nhiều trong ReactJS)
// let newArr = arr.map((item, index) => {
//     if(index % 2 === 0){
//         return item*2;
//     } else {
//         return item;
//     }
// })

// let newArr = arr.map((item, index) => index % 2 === 0 ? item * 2 : item)
// console.log(newArr)
//Gấp đôi những số ở vị trí chẵn

//Lọc
// let newArr = arr.filter((item) => item%2===0)
// console.log(newArr)

//Reduce: tích lũy 1 giá trị qua các vòng lặp
let arr = [2, 5, 4, 3, 7];
let max = arr.reduce((temp, item) => item > temp ? item : temp)
let sum = arr.reduce((temp, item) => item+temp)

console.log(max)