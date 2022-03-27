// Toán tử giải(Spread)
var arr = ["Java", "Python"];
var arr2 = ["Golang"];

// Nó sẽ bỏ ngoặc vuông của array để nối chuỗi
var arr3 = [...arr2, ...arr];
console.log(arr3);

var object1 = {
  name: "Java",
};

var object2 = {
  price: 10,
};

var object3 = {
  ...object1,
  ...object2,
};

console.log(object3);
