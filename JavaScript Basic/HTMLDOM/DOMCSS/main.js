// DOM style
// Cách CSS qua DOM
var boxElement = document.querySelector(".box");

// boxElement.style.width = "100px";
// boxElement.style.height = "200px";
// boxElement.style.background = "red";

// Cách CSS không cần viết từng dòng như bên trên(css inline)
Object.assign(boxElement.style, {
  width: "200px",
  height: "100px",
  backgroundColor: "green",
});

// Getter
console.log(boxElement.style.backgroundColor);
