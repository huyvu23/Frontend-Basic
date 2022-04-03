// Scope : Phạm vi
// Các loại phạm vi :
// -- Global : Toàn cầu (Bất cứ đâu trong chương trình đều có thể truy cập và SD)
// -- Code block - khối mã : let,const (Chỉ truy cập trong khối mã)
// -- Local scope - Hàm : var,function (Thân hàm)

// + Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
// + Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó

// code block
// {
//     const age = 18

// }
// console.log(age); ERROR

// Local Scope
// function logger(){

// }
