// Vòng for này không dùng cho object
var languages = ["ruby", "python", "java"];

for (const value of languages) {
  console.log(value);
}

// Sử dụng với chuỗi
var languages2 = "java";
for (const value of languages2) {
  console.log(value);
}

// Biến đổi để lọc qua Object
const myInfo = {
  age: "18",
  name: "Huy",
};

for (const value2 of Object.keys(myInfo)) {
  //   console.log(value2);
  console.log(myInfo[value2]);
}
