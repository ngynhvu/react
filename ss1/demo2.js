// const sum = (a,b,...arr) => {
//     console.log(arr)
// }
//
// sum(1,2,3,4,5,6,7)

let arr = [1, 2, 3, 4, 5];
// let tempArr = [5,6,6,7,8,9];
// let arr1 = [...arr, ...tempArr]
// console.log(arr1)

let obj = {
    id: 1,
    name:"HaiTT"
}

let tempObj = {
    id: 5,
    address:"Quảng Nam"
}

let obj2 = {...obj, ...tempObj}

let {id, name, address} = obj2
let [a,b,c,...temp]= arr;
console.log(obj2)
