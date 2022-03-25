var users = [
  {
    id: 1,
    name: "Huy",
  },
  {
    id: 2,
    name: "Vũ",
  },
];

var comments = [
  {
    id: 1,
    usersID: 1,
    content: "Alo :)",
  },
  {
    id: 2,
    usersID: 2,
    content: "Ok",
  },
  {
    id: 3,
    usersID: 1,
    content: "Hello",
  },
];

function getComments() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByID(listUsersID) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var result3 = users.filter(function (user) {
        return listUsersID.includes(user.id);
      });
      setTimeout(function () {
        resolve(result3);
      }, 1000);
    }, 2000);
  });
}

getComments().then(function (comments) {
  var listUsersID = comments.map(function (comments2) {
    return comments2.usersID;
  });

  return (
    getUsersByID(listUsersID)
      .then(function (users2) {
        return {
          us: users2,
          comments: comments,
        };
      })
      // Trả về dữ liệu then đằng trước
      .then(function (data) {
        var idElement = document.getElementById("comment-block");
        var html = "";
        data.comments.forEach(function (comment) {
          var user5 = data.us.find(function (user) {
            return user.id === comment.usersID;
          });
          html += `<li>${user5.name} : ${comment.content}</li>`;
        });
        idElement.innerHTML = html;
      })
  );
});
