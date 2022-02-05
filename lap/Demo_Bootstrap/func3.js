function LoginSuccess() {
  let v_Email_login = document.getElementById("Email_Login").value;
  let v_pass_login = document.getElementById("password_Login").value;
  let user = JSON.parse(localStorage.getItem("user"));
  if (user.Email == v_Email_login && user.Password == v_pass_login) {
    alert("Đăng nhập thành công");
    window.open("HomePage.html");
  } else {
    alert("Kiểm tra lại thông tin!!!");
  }
}
