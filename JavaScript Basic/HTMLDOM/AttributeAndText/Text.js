// InnerText(Lấy ra những gì nhìn thấy thật)
// textContent (Lấy ra cả những khoảng cách ở trong html,thực sự nằm trong textNode)

var headingElement = document.querySelector(".test");

// Gán cho text trong element bằng chữ khác
// headingElement.innerText = "New Heading";

// headingElement.textContent = "Huy";

// Lấy ra text ở trong element
console.log(headingElement.innerText);

console.log(headingElement.textContent);
