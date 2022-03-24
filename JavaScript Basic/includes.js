// Phương thức string.includes()
// sẽ kiểm tra xem một chuỗi con được người dúng cung cấp có nằm trong chuỗi hay không.
// Phương thức sẽ trả về True nếu chuỗi chứa chuỗi con mà người dùng cung cấp, ngược lại sẽ trả về False.

// Use String
var title = "Responsive web design ";

// ======================= chuỗi muốn tìm,số thứ tự muốn tìm chuỗi trở đi
console.log(title.includes("web", 1));

// =====================================
// Use Array
var courses = ["Java", "PHP", "Ruby", "Python"];
console.log(courses.includes("PHP"));
