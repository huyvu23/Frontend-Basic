// Dùng với Array
var arr = ["Java", "PHP", "Python"];

var [a, b, c] = arr;
var [d, , e] = arr;

// Sử dụng toán tử rest (lây những phần tử còn lại,khi sử dụng destructuring thì là rest)
var [g, ...rest] = arr;
console.log(rest);
console.log(a, b, c);

// Dung với objects
var obj = {
  name: "Java",
  price: 1000,
};

// Gọi theo đúng tên key
var { name, price } = obj;
console.log(name.price);
