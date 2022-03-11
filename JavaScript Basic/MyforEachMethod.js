Array.prototype.forEach2 = function (callback) {
  for (const index in this) {
    //   Kiểm tra xem forEach2 có phải index trong mảng hay không
    if (this.hasOwnProperty(index)) {
      //   console.log(index);
      callback(this[index], index, this);
    }
  }
};

var courses = ["ruby", "python", "c#"];

courses.forEach2(function (course, index, array) {
  console.log(course, index, array);
});
