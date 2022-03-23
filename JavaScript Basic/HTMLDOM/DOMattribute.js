var headingElement = document.querySelector("h1");

// Cách thêm attribute
headingElement.title = "Heading";
console.log(headingElement);

// Set attribute cho 1 element không có attribute với tham số chuyền vào(attribute,tên attribute)
headingElement.setAttribute("href", "heading");

// Lấy ra attribute
console.log(headingElement.getAttribute("href"));
