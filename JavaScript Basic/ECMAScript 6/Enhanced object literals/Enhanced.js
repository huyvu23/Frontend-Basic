// 1.Định nghĩa key : value cho object
// 2.Định nghĩa method cho object

var name = "Java";
var price = 1000;

var course = {
  // Định nghĩa ngắn gọn khi key và value giống tên nhau
  name,
  price,
  //   name: name,
  //   price: price,
  getName() {
    return name;
  },
};

// 3.Định nghĩa key cho Object dưới dạng biến
var fieldName = "name";
var fieldPrice = "price";

const course2 = {
  [filename]: "PHP",
  [fieldPrice]: 1000,
};
