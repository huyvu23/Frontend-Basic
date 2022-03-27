// DESTRUCTURING
// Dùng với Array (Destructuring)
var arr = ["Java", "PHP", "Python"];

var [a, b, c] = arr;
var [d, , e] = arr;

// Dùng với objects
var obj = {
  name: "Java",
  price: 1000,
};

// Gọi theo đúng tên key
var { name, price } = obj;
console.log(name.price);

// --------------------------------------------------------------------------------------
// REST
// Sử dụng toán tử rest (lây những phần tử còn lại,khi sử dụng với destructuring thì là rest)
var [g, ...rest] = arr;
console.log(rest);
console.log(a, b, c);

// dùng để định nghĩa ra tham số là rest
function logger(...param) {
  console.log(param);
}

logger(1, 2, 3, 4, 5, 6);
