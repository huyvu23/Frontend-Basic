// IIFE : nó là expresstion function được gọi ngay lập tức

// 1.IIFE trông như nào
(function (message) {
  console.log(message);
})("hello");

// 2. sử dụng dấu chấm phẩy trước IIFE để tránh lỗi
// 3. IIFE là 1 hàm "Private"
//- Không thể truy cập ngoài phạm vi

// 4.VD sử dụng IIFE
const app = (function () {
  // private
  const cars = [];
  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();
