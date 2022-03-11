// some : xem phần tử nào trong mảng thỏa mãn một điều kiện của bạn hay không
Array.prototype.some2 = function (callback) {
  for (const index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        return true;
      }
    }
  }
  return false;
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

var isResult = courses.some2(function (course, index, array) {
  return course.isFinish;
});

console.log(isResult);
