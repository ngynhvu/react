// lấy phần tử lớn hơn 5
let arr = [1, 2, 6, 10, 9]
let newArr = arr.filter((item) => item > 5)
console.log(newArr)
// tính tổng số phần tử trong mảng
let newArr2 = arr.reduce((temp, item) => item + temp)
console.log(newArr2)
// tìm số V
let newArr3 = arr.map((item, index) => item === 6?item: undefined)
console.log(newArr3)
// kiểm tra lớn hơn 0
let newArr4 = arr.map((item, index) => item > 0)
console.log(newArr4)
// tìm phần tử đầu tiên lớn hơn 3
let index = arr.findIndex(item => item > 3)
let item = arr.find(item => item > 3)
console.log(index)
console.log(item)
//Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
let [first, ...rest] = arr
console.log(first)
console.log(rest)
//Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = [
    {name: "A", age: 25},
    {name: "B", age: 26}
]
let [{name: name1, age: age1}, {name: name2, age: age2}]= person
console.log(name1, age1)
//Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
function sum(...number) {
    return number.reduce((temp, item) => temp + item);
}
const result = sum(...arr)
console.log(result)
// Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
function welcomeMessage(...names) {
    return `Welcome, ${names.join(', ')}!`
}
const message = welcomeMessage('Vu', 'Ngoc');
console.log(message)
//Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
const title = "To Kill a Mockingbird";
const author = "Harper Lee";
const pages = 281;
const book = {
    title,
    author,
    pages,
    displayInfo(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
    }
}
book.displayInfo()