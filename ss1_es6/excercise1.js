let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];
// Bài 1
// let newArray = courses.filter((element) => {
//   return element.rating >= 4
// });

// Bài 2
// courses.filter((element) => {
//   return element.rating < 4
// }).forEach((e) => {
//   console.log(e.id + "-" + e.title + "-" + e.rating);
// })

let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  }
];

let newArray = [...courses, ...addedCourses];
console.log(newArray);