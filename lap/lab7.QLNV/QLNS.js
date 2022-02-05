var listAccount = [];
// Hàm jqdock này có nghĩa là chờ tất cả load lên hết mới thực hiện function bên trong
$(function () {
  getListEmployees();
  // chức năng reset form
  $("#reset_btn").click(function (e) {
    $("#ID_ID").val("");
    $("#Email_ID").val("");
    $("#Username_ID").val("");
    $("#Fullname_ID").val("");
    $("#Department_ID").val("");
    $("#Position_ID").val("");
  });

  $("#Main_Form_ID").submit(function () {
    // Xử lý sự kiện khi nhấn nút Submit của Form(Save), ở đây phải sử dụng Return False ở cuối sự kiện này để không redirect sang trang mới.
    var v_ID_ID = $("#ID_ID").val();
    var v_Email_ID = $("#Email_ID").val();
    var v_Username_ID = $("#Username_ID").val();
    var v_Fullname_ID = $("#Fullname_ID").val();
    var v_Department_ID = $("#Department_ID").val();
    var v_Position_ID = $("#Position_ID").val();
    var v_Cretate_Date_ID = $("#Cretate_Date_ID").val();

    // Tạo 1 đối tượng account để lưu giữ thông tin nhận được
    var account = {
      ID: v_ID_ID,
      Email: v_Email_ID,
      Username: v_Username_ID,
      Fullname: v_Fullname_ID,
      Department: v_Department_ID,
      Position: v_Position_ID,
      Cretate_Date: v_Cretate_Date_ID,
    };
    $.ajax({
      type: "POST",
      url: "https://60aef8dc5b8c300017deb66b.mockapi.io/accounts/Accounts",
      data: account,
      dataType: "json",
      success: function (response) {
        getListEmployees();
      },
    });

    // Add account vào array
    // listAccount.push(account)

    // Hàm này để hiển thị thông tin account ở table
    // showAccount()

    return false;
    // Sử dụng return false để không redirect tới 1 trang khác.
  });
});

function showAccount() {
  // xóa hết kêt quả đang hiển thị
  $("#Result_TB").empty();
  // Lặp trong listAccount để in thông tin từng phần tử
  // Hiển thị thêm 2 nút để sửa và xóa các Account
  for (var index = 0; index < listAccount.length; index++) {
    $("#Result_TB").append(`
        <tr>
        <th>${listAccount[index].ID}</th>
        <th>${listAccount[index].Email}</th>
        <th>${listAccount[index].Username}</th>
        <th>${listAccount[index].Fullname}</th>
        <th>${listAccount[index].Department}</th>
        <th>${listAccount[index].Position}</th>   
        <th>${listAccount[index].Cretate_Date}</th>
            <th>
                 <button type="button" class="btn btn-warning" onclick = "editAccount(${index})">Edit</button>
            </th>
            <th>
                <button type="button" class="btn btn-warning" onclick = "deleteAccount(${index})">Delete</button>
            </th>
        </tr>
        `);
  }
}

function deleteAccount(Index) {
  var id_delete = listAccount[Index].ID;
  $.ajax({
    type: "DELETE",
    url: "https://60aef8dc5b8c300017deb66b.mockapi.io/accounts/Accounts/" + id_delete,

    dataType: "json",
    success: function (response) {
      getListEmployees();
    },
  });
  // listAccount.splice(Index,1)
  // showAccount()
}

function editAccount(Index) {
  var id_update = listAccount[Index].ID;
  //  đổ ngược lại giá trị lên bảng để edit
  $("#ID_ID").val(listAccount[Index].ID);
  $("#Email_ID").val(listAccount[Index].Email);
  $("#Username_ID").val(listAccount[Index].Username);
  $("#Fullname_ID").val(listAccount[Index].Fullname);
  $("#Department_ID").val(listAccount[Index].Department);
  $("#Position_ID").val(listAccount[Index].Position);
  $("#Cretate_Date_ID").val(listAccount[Index].Cretate_Date);

  // edit account
  $("#update_btn").click(function () {
    var v_ID_ID = $("#ID_ID").val();
    var v_Email_ID = $("#Email_ID").val();
    var v_Username_ID = $("#Username_ID").val();
    var v_Fullname_ID = $("#Fullname_ID").val();
    var v_Department_ID = $("#Department_ID").val();
    var v_Position_ID = $("#Position_ID").val();
    var v_Cretate_Date_ID = $("#Cretate_Date_ID").val();

    var account_update = {
      Email: v_Email_ID,
      Username: v_Username_ID,
      FullName: v_Fullname_ID,
      Department: v_Department_ID,
      Position: v_Position_ID,
      CreateDate: v_Cretate_Date_ID,
    };

    $.ajax({
      type: "PUT",
      url: "https://60aef8dc5b8c300017deb66b.mockapi.io/accounts/Accounts/" + id_update,
      data: account_update,
      dataType: "json",
      success: function (response) {
        getListEmployees();
      },
    });
    // set giá trị mới cho account
    // listAccount[Index].ID = v_ID_ID
    // listAccount[Index].Email = v_Email_ID
    // listAccount[Index].Username = v_Username_ID
    // listAccount[Index].Fullname = v_Fullname_ID
    // listAccount[Index].Department = v_Department_ID
    // listAccount[Index].Position = v_Position_ID
    // listAccount[Index].Cretate_Date = v_Cretate_Date_ID
    // showAccount()
  });
}

function getListEmployees() {
  $.ajax({
    type: "GET",
    url: "https://60aef8dc5b8c300017deb66b.mockapi.io/accounts/Accounts",
    dataType: "json",
    success: function (response) {
      listAccount = [];
      parseData(response);
      showAccount();
    },
  });
}

function parseData(response) {
  response.forEach(function (element) {
    var account = {
      ID: element.AccountID,
      Email: element.Email,
      Username: element.Username,
      Fullname: element.FullName,
      Department: element.Department,
      Position: element.Position,
      Cretate_Date: element.CreateDate,
    };
    listAccount.push(account);
  });
}
