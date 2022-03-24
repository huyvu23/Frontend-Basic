function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

// Prototype giúp ta thêm 1 thuộc tính vào trong hàm tạo
User.prototype.className = "F8";

var user = new User("Huy", "vŨ", "AVATAR");
console.log(user.className);
