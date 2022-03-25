// 1.Xử lý nhiều việc khi 1 event xảy ra
// 2.Lắng nghe / hủy bỏ lắng nghe

var btn = document.getElementById("btn");

function viec1() {
  console.log(Math.random());
}

// gồm 2 dối dố là (tên sự kiện,funcion) và được gọi theo thứ tự add
btn.addEventListener("click", viec1());

btn.addEventListener("click", viec1());

btn.addEventListener("click", viec1());

// Hủy bỏ lắng nghe
setTimeout(function () {
  btn.removeEventListener("click", viec1());
}, 3000);

console.log(btn);
