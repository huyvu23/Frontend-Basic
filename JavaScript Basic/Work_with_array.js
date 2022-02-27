// Cách tạo mảng
var languages = ["Java", "Python", "Golang"];

// Cách kiểm tra xem có phải Array hay không
console.log(Array.isArray(languages));

// Cách lấy phần tử theo Index
console.log(languages[0]);
// ==============================================================

// * Các thuộc tinh làm việc Với Array
// 1.To String
console.log(languages.toString());

// 3.Pop(Xóa phần tử cuối mảng,trả lại phần tử đã xóa)
console.log(languages.pop());

// 4.Push(Thêm một hoặc nhiều phần tử vào cuối mảng , trả về độ dài mới của mảng)
console.log(languages.push("C ++", "C#"));

// 5.Shift(Xóa một phần tử đầu mảng , trả lại phần tử đã xóa)

// 6.Unshift (Thêm một hoặc nhiều phần tử vào đầu mảng, trả lại độ dài mới của mảng)

// 7.Splicing(Xóa,cắt,chèn phần tử mới vào mảng)
// + splice(index phần tử cần xóa,số phần tử cần xóa bắt đầu từ index đó)
languages.splice(1, 1);
// + cách chèn thêm phần tử(vị trí chèn,xem có xóa ông nào không ,phần tử từ thứ 3 trở đi là phần tử chèn thêm vào)
languages.splice(1, 0, "Dart");

// 8.Concat(Nối Array)
language2 = ["Ruby"];
console.log(languages.concat(language2));
