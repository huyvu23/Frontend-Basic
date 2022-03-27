// Promise để tránh hiện tượng bất đồng bộ
// Sync : Đồng bộ
// Async : Bất đồng bộ

// CallBack hell (khi callback)
// Pyramid of doom (Khi viết code)

// có 3 trạng thái : pandding,fullfiel,reject
// function trước trả về gì function sau sẽ nhận được cái đó(tính chất chuỗi)

var promise = new Promise(
  // Executor
  function (resolve, reject) {
    //logic
    // Thành công : Resolve
    // Thất bại : Reject

    // Fake API
    resolve([
      {
        id: 1,
        name: "java",
      },
    ]);
  }
);

promise
  .then(function (coures) {
    // được gọi khi resolve
    console.log(coures);
  })
  .catch(function (error) {
    // được gọi khi reject
    console.log(error);
  })
  .finally(function () {
    // Đều thực thi khi fail hoặc success
    console.log("Done");
  });
