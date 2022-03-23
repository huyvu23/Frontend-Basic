// InnerText : trả lại những gì mình nhìn thấy
// textContent : trả lại cái gì thực sự là text node bên trong (phải xe ví dụ)

var headingElement = document.querySelector(".heading");

// Lấy được ra nội dung
// console.log(headingElement.innerText);
// headingElement.innerText = "new heading"; // được tạo ra khi mã js thực thi

// console.log(headingElement.textContent);
// headingElement.textContent = "new heading 2";

console.log(headingElement.innerText);
console.log(headingElement.textContent);
