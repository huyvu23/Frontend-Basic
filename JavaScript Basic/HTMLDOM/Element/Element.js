// Element : ID ,name ,tag,css selector,html collection
// ===================================================================
//  Get By ID(Trả về thẳng đối tượng đó)
// var headingNode = document.getElementById("heading");
// console.log(headingNode);

// ===================================================================
// Get By Class(có thể lấy nhiều class , Trả về Html Collection)
// var headingNodes = document.getElementsByClassName("heading1");
// console.log(headingNodes);

// ===================================================================
// Get by Tag(Cũng trả về HTML collection)
// var headingNodes = document.getElementsByTagName("p");
// console.log(headingNodes);

// ===================================================================
// Get By css Selector(Trả về thẳng đối tượng)
// var headingNode = document.querySelector(".heading1");
// console.log(headingNode);

// Trả về NodeList(Trả về tất cả đối tượng có class truyền vào)
var headingNodes = document.querySelectorAll(".heading1");
console.log(headingNodes[0]);
