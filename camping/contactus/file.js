// var loadFunction = () => {
//   var a = 10;
//   return a * a;
// };
// var Carre = loadFunction();
// console.log(Carre);

// var array = [1, 2, 3, 4];

// const functionToHandleArray = (element, index) => {
//   console.log("one element =>", element);
//   return element * 2;
// };

// var newArray = array.map(functionToHandleArray);

// console.log(array);
// console.log(newArray)
// var arr2 = [{ id: 1 }, { id: 2 }];
// console.log(arr2);

// const show = (a) => {
//   if (a == 1) {
//     return 1;
//   } else {
//     return 1;
//

const users = [
  { id: 1, age: 18 },
  { id: 1, age: 19 },
  { id: 1, age: 20 },
  { id: 1, age: 21 },
];
const newUSers = users.map((element, index, array) => {
  let result =
    element.age >= 20
      ? { ...element, age: element.age + 2 }
      : { ...element, age: element.age + 1 };
  return result;
});
console.log(users);
console.log(newUSers);
