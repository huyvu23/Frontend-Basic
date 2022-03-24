// ClassList Property : giúp quản lý class của element gọi tới thuộc tính classList

// add : thêm class vào element
// contains : kiểm tra 1 class có nằm trong element này hay không
// remove : xóa bỏ 1 class khỏi element
// toggle : có thì xóa , không có thì thêm

var boxElement = document.querySelector(".box");
// Thêm class
boxElement.classList.add("red", "blue");

// Kiểm tra
console.log(boxElement.classList.contains("red"));

// Cách set thời gian
setTimeout(() => {
  // Cách xóa
  boxElement.classList.remove("red");
}, 3000);

setInterval(() => {
  boxElement.classList.toggle("blue");
}, 1000);
