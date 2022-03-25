// 1.Promise.resolve : mặc định thành công
// 2.Promise.reject : mặc định thất bại
// 3.Promise.all : chạy song song với nhau

var promise1 = new Promise(function (resolve, reject) {
  var h = true;
  if (h) {
    reject("Error");
  } else {
    setTimeout(function () {
      resolve([1]);
    }, 2000);
  }
});

var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});

Promise.all([promise1, promise2])
  .then(function (resolve) {
    var result1 = resolve[0];
    var result2 = resolve[1];

    console.log(result1.concat(result2));
  })
  .catch(function (err) {
    console.log(err);
  });
