//PreventDefault(Loại bỏ hành vi mặc định của trình duyệt trên 1 thẻ html)
//StopPropagation(Loại bỏ sự kiện nổi bọt)

// Ex về PreventDefault
var aElement = document.querySelectorAll("a");

for (let i = 0; i < aElement.length; i++) {
  aElement[i].onclick = function (e) {
    //   Nếu chuỗi bắt đầu
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}

console.log(aElement);

// Ex về StopPropagation
document.querySelector("div").onclick = function () {
  console.log("DIV");
};

document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("click me");
};
