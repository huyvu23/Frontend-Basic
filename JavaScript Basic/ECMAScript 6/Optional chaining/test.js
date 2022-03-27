// Optional chaining (?.) : lên mạng và tìm hiểu
// Sử dụng khi nghi ngờ  có tồn tại hay không : dùng cho obj,arr,function
const obj = {
  name: "alice",
  cat: {
    name: "Dinah",
    cat2: {
      name: "Dinah 2",
    },
  },
};

if (obj.cat?.cat2) {
  console.log(obj);
}
