// 1.Closure là 1 hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở ngoài phạm vi của nó
// 2.Ứng dụng : viết code ngắn gọn hơn;biểu diễn ,ứng dụng tính Private trong OOP
function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`);
  }
  return logger;
}
