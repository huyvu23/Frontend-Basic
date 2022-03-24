// DOM events là sự kiện mà người dùng tương tác với trang web của mình
// 1.Attribute Events
// 2.Assign event using the element node (gán sự kiện)

var h1Element = document.querySelector("h1");

h1Element.onclick = function () {
  // chỉ thực khi khi click
  console.log(h1Element.innerHTML);
};
