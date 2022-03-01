function writeLog() {
  var myString = " ";
  for (const param of arguments) {
    myString += `${param} -`;
  }
  console.log(myString);
}

writeLog(1, 2, 3, 4);

// =======================================
// Return trong hàm
function sum(a, b) {
  c = a + b;
  return c;
}

console.log(sum(1, 2));

// Hàm tròng Hàm
function showMessage() {
  function showMessage2() {
    console.log("Hello");
  }
  showMessage2();
}
showMessage();
