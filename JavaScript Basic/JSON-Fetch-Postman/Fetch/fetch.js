var postAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(postAPI)
  .then(function (response) {
    return response.json();
    // nó parse sẵn cho mình rồi
  })
  .then(function (posts) {
    console.log(posts);
  });
