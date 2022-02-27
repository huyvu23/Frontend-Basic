// LÀM VIỆC VỚI CHUỖI
var myString = "Học JS tại F8";

// 1.Length
console.log(myString.length);

// 2.Find Index (lấy ra index của ký tự)
console.log(myString.indexOf("JS"));

// 3.Cut String
console.log(myString.slice(4, 6));

// 4.Replace(ghi đè)
console.log(myString.replace("JS", "JavaScript"));

// 5.Convert to Upper case
console.log(myString.toUpperCase());

// 6.Convert to Lower case
console.log(myString.toLowerCase());

// 7.Trim(loại bỏ kí tự khoảng trắng ở 2 đầu)
console.log(myString.trim());

//8.split(cắt 1 chuỗi thành array)
var languages = "Java,Ruby,Python";
console.log(languages.split(","));

// 9.Get a character by Index(lấy  1 ký tự bởi index)
console.log(myString.charAt(0));
