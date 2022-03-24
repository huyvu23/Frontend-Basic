var schoolKey = "shcool";
// Cách tạo Object
var myInfo = {
  age: 20,
  name: "Huy",
  // Thêm key bằng biến
  [schoolKey]: "VTI ACADEMY",
  getName: function () {
    return this.age;
  },
};
// Cách thêm key mới vào Object
myInfo.email = "huyvu@gmail.com";

console.log(myInfo["age"]);
console.log(myInfo.getName());

// Cách xóa key
delete myInfo.age;
