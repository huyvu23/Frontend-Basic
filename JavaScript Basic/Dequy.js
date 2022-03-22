// Hàm gọi lại chính nó là đệ quy
// 1. Xác định điểm dừng
// 2. logic handle ==> Tạo ra điểm dừng

function loop(start, end, cb) {
  if (start < end) {
    cb(start);
    return loop(start + 1, end, cb);
  }
}

var languages = ["Ruby", "Python", "Java"];

loop(0, languages.length, function (index) {
  console.log(languages[index]);
});
