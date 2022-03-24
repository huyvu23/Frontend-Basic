var boxElement = document.querySelector(".box");

//InnerHTML : có thể thêm element,attribute,text vào trong element
// boxElement.innerHTML = "<h1>Heading</h1>";

// console.log(boxElement.querySelector("h1"));

// ==================================================================

// Sử dung Set của OuterHTML thì sẽ set từ vị trí gọi
boxElement.outerHTML = "<span>Test</span>";

// OutnerHTML lấy từ vị trí element gọi
console.log(boxElement.outerHTML);
