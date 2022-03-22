// Array Map: Dùng map khi muốn chỉnh sửa , thay đổi element của một array
var courses = [
  {
    id: 1,
    name: "Ruby",
  },
  {
    id: 2,
    name: "Java",
  },
  {
    id: 3,
    name: "Python",
  },
  {
    id: 4,
    name: "C++",
  },
];

function courseHandle(course, index, originArray) {
  return {
    id: course.id,
    name: `Khóa học : ${course.name}`,
    index: index, // index của array
    originArray: courses, // Array cũ
  };
}

// Đối số truyền vào phải là một Funcion
var listCourses = courses.map(courseHandle);

console.log(listCourses);
