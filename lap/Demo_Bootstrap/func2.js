alert("import func 2");

function ResetForm() {
  // xét các ô giá trị về rỗng
  document.getElementById("UserName_ID").value = "";
  document.getElementById("Email_ID").value = "";
  document.getElementById("PassWord_ID").value = "";
  document.getElementById("Confirmation_Password_ID").value = "";
  document.getElementById("birthday_ID").value = "";
}

function CreateNewUser() {
  let v_User_Name = document.getElementById("UserName_ID").value;
  let v_Email = document.getElementById("Email_ID").value;
  let v_pass = document.getElementById("PassWord_ID").value;
  let v_confirmation_pass = document.getElementById("Confirmation_Password_ID").value;
  let v_birthday = document.getElementById("birthday_ID").value;
  if (v_pass !== v_confirmation_pass) {
    alert("Mật khẩu không trùng khớp");
  }
  // tạo ra một đối tượng để lưu thông tin
  let user = {
    User_Name: v_User_Name,
    Email: v_Email,
    Password: v_pass,
    birthday: v_birthday,
  };
  window.open("LoginPage.html", "_self");
  // chuyển đối tượng về dạng chuỗi
  let json = JSON.stringify(user);
  // lưu xuống dưới dạng (key,value)
  localStorage.setItem("user", json);
  console.log(json);
}
