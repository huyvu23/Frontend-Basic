// DOM Attribute

var headingElement = document.querySelector("h2");
// Thêm Attribute vào html
// headingElement.title = "heading";
// headingElement.className = "Heading";

// =======================================================
// Set Attribute nhận vào 2 tham số (kiểu attribute , giá trị attribute)
headingElement.setAttribute("id", "heading");

// Get Attribute
var test = headingElement.getAttribute("class");

console.log(headingElement);
console.log(test);
