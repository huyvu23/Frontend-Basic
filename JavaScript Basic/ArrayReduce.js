var courses = [
  {
    id: 1,
    name: "Ruby",
    coin: 200,
  },
  {
    id: 2,
    name: "Java",
    coin: 100,
  },
  {
    id: 3,
    name: "Python",
    coin: 150,
  },
];

var i = 0;
//accumulator : Biến tích trữ
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  i++;

  var total = accumulator + currentValue.coin;
  console.table({
    "Lượt chạy:": i,
    "Biến tích trữ:": accumulator,
    "Gía khóa học:": currentValue.coin,
    "Tích trữ được:": total,
  });
  return total;
}

// Đối số truyền vào là (funcion,giá trị khởi tạo)
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);
