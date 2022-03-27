var courseAPI = "http://localhost:3000/courses";

function start() {
  getCourses(function (courses) {
    renderCourses(courses);
  });
  handleCreateForm();
}

start();

// Function
function getCourses(callback) {
  fetch(courseAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourses(data, callback) {
  // Phương thức gắn thêm vào từng phương thức khi call api với Fetch
  var option = {
    method: "POST",
    // Chuyển dữ liệu sang json
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseAPI, option)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseAPI + "/" + id, option)
    .then(function (response) {
      response.json();
    })
    .then(
      getCourses(function (courses) {
        renderCourses(courses);
      })
    );
}

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  const htmls = courses.map(function (course) {
    return `<li>
      <h4>${course.name}</h4>
      <p>${course.description}</p>
      <button onclick = "handleDeleteCourse(${course.id})">Xóa</button>
      </li>`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    //   ------------------------------ lấy tất cả thẻ input có name = name
    var name = document.querySelector('input[name = "name"]').value;
    var description = document.querySelector('input[name = "description"]').value;
    var formData = {
      name: name,
      description: description,
    };

    createCourses(formData, function () {
      getCourses(function (courses) {
        renderCourses(courses);
      });
    });
  };
}
