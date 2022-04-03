// Hoisting with var
var age; // ==> Hoisting
console.log(age);
age = 20;

// --------------------------------

// Hoisting with Declaration : vẫn hoạt động bình thường trước khi dược khai báo
console.log(sum(6, 9));

function sum(a, b) {
  return a + b;
}

// Hoisting with let,const
