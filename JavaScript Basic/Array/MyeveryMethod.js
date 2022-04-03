// every : kiểm tra tất cả các element phải thỏa mãn điều kiện mới trả về true/false

Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "Java",
    coin: 680,
    isFinish: true,
  },
  {
    name: "Ruby",
    coin: 860,
    isFinish: false,
  },
  {
    name: "Python",
    coin: 980,
    isFinish: false,
  },
];

var result1 = courses.every2(function (course, index, array) {
  return course.isFinish === true;
});

console.log(result1);
