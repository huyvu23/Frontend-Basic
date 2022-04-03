// 1.Là Hàm
// 2.Truyền qua đối số
// 3.Được gọi lại(Trong hàm nhận đối số)
// =====================================

// Định nghĩa lại hàm
Array.prototype.map2 = function (callback) {
  var output = [];
  var arrayLength = this.length; // (This chính là thằng mà gọi đến phương thức này)
  for (let i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
};
// =========================================

var courses = ["ruby", "python", "c#"];

var htmls = courses.map2(function (course) {
  return `<h2>${course}</h2>`;
});

console.log(htmls);

// var htmls = courses.map(function (course) {
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(""));
