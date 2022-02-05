// Trong bài tập này sẽ xử dụng Jquery và JavaScript, JavaScript để thực hiện chức năng quản lý nhân viên, tương ứng với bảng Account trong DB TestingSystem, Các chức năng: Thêm, Sửa, Xóa. Dữ liệu này sẽ tương tác với server Backend API.
// Khai báo 1 array để lưu thông tin tất cả các Account trên hệ thống.

var listAccount = [];
var listDepartment = [];
var listPosition = [];

// Cộng thêm đoạn chuỗi sử dụng cho Sort khi gửi để lấy dữ liệu API
var sortFiled = "id";
var isAsc = false;

 // Khai báo biến để sử dụng trong phân trang
var currentPage = 1;
var size = 5;
// Lưu thông tin tổng số trang
var totalPages ;


$(function () {

    getListEmployees();
    getListDepartment();
    getListPosition();
// Disable các trường CreateDate khi nhấn vào nút Save do trường này không cần nhập vào, sẽ lấy là Now Date khi Insert DB
        $('#Cretate_Date_ID').attr('disabled', 'disabled')
        $('#ID_ID').attr('disabled', 'disabled')

 // xét giá trị về rỗng = nút reset
    $("#reset_btn").click(function (e) { 
    $("#ID_ID").val("");
    $("#Email_ID").val("");
    $("#Username_ID").val("");
    $("#Fullname_ID").val("");
    $("#Department_ID").val("");
    $("#Position_ID").val("");

    }); 

    // xử lí sự kiện nút save
    $('#Main_Form_ID').submit(function(){
        
// Xử lý sự kiện khi nhấn nút Submit của Form(Save), ở đây phải sử dụng Return False ở cuối sự kiện này để không redirect sang trang mới.
        var v_Email_ID = $('#Email_ID').val()
        var v_Username_ID = $('#Username_ID').val()
        var v_Fullname_ID = $('#Fullname_ID').val()
        var v_Department_ID = $('#Department_ID').val()
        var v_Position_ID = $('#Position_ID').val()

        // check dữ liệu (! là không tồn tại)
             if (!v_Email_ID || v_Email_ID.length < 6 || v_Email_ID.length > 50) {
                // show error message
                alert("Email name must be from 6 to 50 characters!");
                return false;
            }
            if (!v_Username_ID || v_Username_ID.length < 6 || v_Username_ID.length > 50) {
                // show error message
                alert("Username name must be from 6 to 50 characters!");
                return false;
            }
            if (!v_Fullname_ID || v_Fullname_ID.length < 6 || v_Fullname_ID.length > 50) {
                // show error message
                alert("Fullname name must be from 6 to 50 characters!");
                return false;
            }
            if (!v_Department_ID || v_Department_ID == '--Select a Department--') {
                // show error message
                alert("Pls choose Department!");
                return false;
            }
            if (!v_Position_ID || v_Position_ID == '--Select a Position--') {
                // show error message
                alert("Pls choose Possition!");
                return false;
            }



        // Lấy ra ID của Department khi người dùng lựa chọn phòng ban
        for (let index = 0; index < listDepartment.length; index++) {
             if (listDepartment[index].name == v_Department_ID) {
                    var depID = listDepartment[index].id
                }
      
        }

        for (let index = 0; index < listPosition.length; index++) {
             if (listPosition[index].name == v_Position_ID) {
                    var posID = listPosition[index].id
                }
      
        }

// Tạo 1 đối tượng account để lưu giữ thông tin nhận được
        var account = {

            email: v_Email_ID,
            username: v_Username_ID,
            fullname:v_Fullname_ID,
            departmentId:depID,
            positionId:posID,
            
        }

// Check xem email đã tồn tại dưới DB chưa
                 $.ajax({
                url: 'http://localhost:8080/api/v1/accounts/EmailExists/' + v_Email_ID ,
                type: 'GET',
                // data: JSON.stringify(account), // body
                contentType: "application/json", // type of body (json, xml, text)
                dataType: 'json', // datatype return
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
                },
                success: function(data, textStatus, xhr) {
                    console.log("kết quả check" + data)
                    if (data == true) {
                        alert("Email đã tồn tại trên hệ thống")
                        return false;
                    } else {
                        // CHeck username tồn tại không
                    $.ajax({
                     url: 'http://localhost:8080/api/v1/accounts/UserNameExists/' + v_Username_ID ,
                     type: 'GET',
                     contentType: "application/json", // type of body (json, xml, text)
                    dataType: 'json', // datatype return
                     beforeSend: function(xhr) {
                        xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
                    },
                    success: function(data, textStatus, xhr) {
                        console.log("kết quả check" + data)
                        if (data == true) {
                        alert("Username đã tồn tại trên hệ thống")
                        return false;
                        } else {
                            // check userName và Email xong sẽ add vào hệ thống
                            $.ajax({
                                url: 'http://localhost:8080/api/v1/accounts/',
                                type: 'POST',
                                data: JSON.stringify(account), // body
                                contentType: "application/json", // type of body (json, xml, text)
                                // dataType: 'json', // datatype return
                                beforeSend: function(xhr) {
                                     xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
                                 },
                                 success: function(data, textStatus, xhr) {
                                   currentPage = totalPages;
                                   getListEmployees();
                                 },
                                  error(jqXHR, textStatus, errorThrown) {
                                    alert("Error when loading data");
                                     console.log(jqXHR);
                                     console.log(textStatus);
                                     console.log(errorThrown);
                                }
                            });
                        
                        }
                    },
                    error(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                    });
                }
              },
                error(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });







// Hàm này để hiển thị thông tin account ở table
    // showAccount()
        return false;
// Sử dụng return false để không redirect tới 1 trang khác.
    })   


})


function showAccount() {
    // xóa hết kêt quả đang hiển thị
    $("#Result_TB").empty()
    // Lặp trong listAccount để in thông tin từng phần tử
    // Hiển thị thêm 2 nút để sửa và xóa các Account
    for (var index = 0; index <listAccount.length; index++) {
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
        `)
    }
}

function deleteAccount(Index) { 
    var id_delete = listAccount[Index].ID;
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/v1/accounts/" + id_delete,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
        },
        
        // dataType: "json",
        success: function (response) {
        resetPaging();
        getListEmployees();
        }
    });

 }

 function editAccount(Index) {
     var id_update = listAccount[Index].ID;
    //  đổ ngược lại giá trị lên bảng để edit
        $('#ID_ID').val(listAccount[Index].ID);
        $('#ID_ID').attr("disabled" , "disabled");
        $('#Email_ID').val(listAccount[Index].Email)
        $('#Email_ID').attr("disabled" , "disabled");
        $('#Username_ID').val(listAccount[Index].Username)
        $('#Username_ID').attr("disabled" , "disabled"); // câu này là để không cho phép cập nhật
        $('#Fullname_ID').val(listAccount[Index].Fullname)
        $('#Department_ID').val(listAccount[Index].Department)
        $('#Position_ID').val(listAccount[Index].Position)
        $('#Cretate_Date_ID').val(listAccount[Index].Cretate_Date)


        // edit account
        $('#update_btn').click(function () { 
            var v_Fullname_ID = $('#Fullname_ID').val()
            var v_Department_Name = $('#Department_ID').val()
            var v_Position_Name = $('#Position_ID').val()

            // Chuyển đổi dữ liệu department người dùng nhập từ chữ sang số để phần backend bên dưới hiểu
            for (let index = 0; index < listDepartment.length; index++) {
                if (listDepartment[index].name == v_Department_Name) {
                    var depaID = listDepartment[index].id
                }
                
            }

             // Chuyển đổi dữ liệu posotion người dùng nhập từ chữ sang số để phần backend bên dưới hiểu
            for (let index = 0; index < listPosition.length; index++) {
                if (listPosition[index].name == v_Position_Name) {
                    var posiID = listPosition[index].id
                }
                
            }

            if (!v_Fullname_ID || v_Fullname_ID.length < 6 || v_Fullname_ID.length > 50) {
            // show error message
            alert("Fullname name must be from 6 to 50 characters!");
            return false;
          }



            var account_update = {
                fullname : v_Fullname_ID,
                departmentId : depaID,
                positionId : posiID,
            }

            $.ajax({
                type: "PUT",
                url: "http://localhost:8080/api/v1/accounts/" + id_update ,
                contentType: "application/json; charset=UTF-8",
                data:JSON.stringify(account_update),

                // đính kèm thêm thông tin xác thực để gửi xuống backend
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
                },

                
                success: function (data) {
                    getListEmployees();
                }
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
     // thực hiện tạo lại url để lấy dữ liệu từ API Server, cần phải gửi thêm page và size cho đúng chuẩn API
    var url = "http://localhost:8080/api/v1/accounts/";

    url += "?page=" + currentPage + "&size=" + size;

    url += "&sort=" + sortFiled + "," + (isAsc ? "asc" : "desc");

    var search = $('#input-search-department').val();
    if (search) {
        console.log(search);
          url += "&search=" + search;
        console.log(url);
    }
 

    //  $.ajax({
    //      type: "GET",
    //      url: url,
    //      dataType: "json",
    //      success: function (response) {
    //          listAccount = [];
    //          parseData(response)
    //          showAccount();

    //      totalPages = response.totalPages;
    //     // Sau khi hiển thị dữ liệu sẽ Show thêm các nút để thực hiện phân trang, tính các nút này dựa trên API totalPages được trả ra
    //     pagingTable(totalPages);

    //      }
    //  });

    $.ajax({
        url: url,
        type: 'GET',
        contentType: "application/json",
        dataType: 'json', // datatype return
        beforeSend: function(xhr) {
            //                                                      đây là thông tin lưu xuống local storage
            xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
        },
        success: function(data, textStatus, xhr) {
            // reset list employees
            listAccount = [];
            parseData(data);
            showAccount();
            totalPages = data.totalPages;
            // Sau khi hiển thị dữ liệu sẽ Show thêm các nút để thực hiện phân trang, tính các nút này dựa trên API totalPages được trả ra
            pagingTable(totalPages);
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });

     
 }

 function parseData(response) {
     // employees = data;
    // cần sử dụng thêm thuộc tính data.content để lấy ra được list account theo API từ Backend

     response.content.forEach(function (element)  {
         var account = {
            ID: element.id,
            Email: element.email,
            Username: element.username,
            Fullname:element.fullname,
            Department:element.department,
            Position:element.position,
            Cretate_Date:element.createDate,
        };
        listAccount.push(account)
     });
 }

 function changeSort(field) {
     if (field == sortFiled) {
         isAsc = !isAsc
     } else {
         sortFiled = field
         isAsc = true
     }
     getListEmployees();
 }

//  Viết hàm getListDepartment
function getListDepartment() {


// $.ajax({
//     type: "GET",
//     url: "http://localhost:8080/api/v1/departments",
//     dataType: "json",
//     success: function (data,status) {
//         console.log(data);
//         data.forEach((item) => {
//             var department = {
//                 id:item.id,
//                 name:item.name,
//             }
//             // cho các Department vào 1 List đã khai báo ở đầu chương trình
//             listDepartment.push(department)
//         });
        // for (let index = 0; index < listDepartment.length; index++) {
        //     $('#Department_ID').append(`
        // <option>${listDepartment[index].name}</option>
        //   `)

            
//         }
//     }
// });
$.ajax({
        url: "http://localhost:8080/api/v1/departments",
        type: 'GET',
        contentType: "application/json",
        dataType: 'json', // datatype return
        
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
        },
        success: function(data, textStatus, xhr) {
            // Đoạn lệnh này copy từ phần gọi Ajax theo cách không xac thực commemt bên trên xuống.
            data.forEach(function(item) {
                var department = {
                    'id': item.id,
                    'name': item.name,
                }
                // add department vào array
                listDepartment.push(department)
            });
            for (let index = 0; index < listDepartment.length; index++) {
                $('#Department_ID').append(`
            <option>${listDepartment[index].name}</option>
              `)

            }
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });

}

function getListPosition() {

    $.ajax({
        url: "http://localhost:8080/api/v1/positions",
        type: 'GET',
        contentType: "application/json",
        dataType: 'json', // datatype return
        
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("USERNAME") + ":" + localStorage.getItem("PASSWORD")));
        },
        success: function(data, textStatus, xhr) {
            // Đoạn lệnh này copy từ phần gọi Ajax theo cách không xac thực commemt bên trên xuống.
            data.forEach(function(item) {
                var position = {
                    'id': item.id,
                    'name': item.name,
                }
                // add position vào array
                listPosition.push(position)
            });
            for (let index = 0; index < listPosition.length; index++) {
                $('#Position_ID').append(`
            <option>${listPosition[index].name}</option>
              `)

            }
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });

}

// Nhóm hàm xử lý phân trang
// Hàm Gen ra các icon dùng trong phân trang
function pagingTable(pageAmount) {
    var pagingStr = "";
    // Hàm Gen nút Previous
    if (pageAmount > 1 && currentPage > 1) {
        pagingStr +=
            '<li class="page-item">' +
            '<a class="page-link" onClick="prevPaging()">Previous</a>' +
            '</li>';
    }
    // Hàm Gen nút số trang 1,2,3 ...
    for (i = 0; i < pageAmount; i++) {
        pagingStr +=
            '<li class="page-item ' + (currentPage == i + 1 ? "active" : "") + '">' +
            '<a class="page-link" onClick="changePage(' + (i + 1) + ')">' + (i + 1) + '</a>' +
            '</li>';
    }
    // Hàm Gen nút Next
    if (pageAmount > 1 && currentPage < pageAmount) {
        pagingStr +=
            '<li class="page-item">' +
            '<a class="page-link" onClick="nextPaging()">Next</a>' +
            '</li>';
    }

    $('#pagination').empty();
    $('#pagination').append(pagingStr);
}

// Hàm thực hiện khi nhấn vào các nút phân trang 1, 2, 3
function changePage(page) {
    if (page == currentPage) {
        return;
    }
    currentPage = page;
    getListEmployees();
}
// Hàm reset về trang mặc định, trang đầu tiên 1. Sử dụng khi xóa dữ liệu
function resetPaging() {
    currentPage = 1;
    size = 5;
}
// Hàm xử lý khi nhấn nút Previous
function prevPaging() {
    changePage(currentPage - 1);
}
// Hàm xử lý khi nhấn nút next
function nextPaging() {
    changePage(currentPage + 1);
}

// Hàm cho nút search
function handleSearch() {
    getListEmployees();
}


// Xử lý login
function Login() {
    // Lấy ra username và password người dùng nhập vào , '#username' và password là tên id đã đặt bên login.html
    var username = $('#username').val();
    var password = $('#password').val();
        $.ajax({
        url: 'http://localhost:8080/api/v1/login',
        type: 'GET',
        contentType: "application/json",
        dataType: 'json', // datatype return
        // Mỗi request trả về dưới backend đều phải gắn thêm thông tin xác thực
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
        },
        //              tên dữ liệu trả về
        success: function(data, textStatus, xhr) {

            // save data to storage
            // https://www.w3schools.com/html/html5_webstorage.asp
            localStorage.setItem("ID", data.id);
            localStorage.setItem("FULL_NAME", data.fullName);
            localStorage.setItem("USERNAME", username);
            localStorage.setItem("PASSWORD", password);

            // redirect to home page (chuyển trang)
            // https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
            window.location.replace("QLNV.html");
        },
        error(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 401) {
                alert("Kiểm tra lại thông tin!!")
            } else {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        }
    });

}

function logout() {
    // muốn logout thì xóa những thông tin đã lưu trữ ở localStorage đi
    localStorage.removeItem("ID")
    localStorage.removeItem("FULL_NAME")
    localStorage.removeItem("USERNAME")
    localStorage.removeItem("PASSWORD") 
     
    // chuyển tới trang login
     window.location.replace("Login.html");
}

function Register() {
      window.location.replace("Register.html");
}

