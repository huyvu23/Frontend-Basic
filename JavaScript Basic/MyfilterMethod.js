// Filter : Trả về tất cả các phần tử thỏa mãn điều kiện

Array.prototype.filter2 = function (callback) {
  var output = [];
  for (const index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "Java",
    coin: 680,
  },
  {
    name: "Ruby",
    coin: 860,
  },
  {
    name: "Python",
    coin: 980,
  },
];

var filterCourses = courses.filter2(function (course, index, array) {
  return course.coin > 700;
});

console.log(filterCourses);
