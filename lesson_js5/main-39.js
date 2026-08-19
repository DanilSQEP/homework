// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
  firstname: "Даниил",
  lastname: "Никитин",
  age: 25,
};
for (const key in person) {
  console.log(person[key]);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const isEmpty = (object) => {
  for (const key in object) return false;
  return true;
};
console.log(isEmpty(person));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
  title: "Выучить JS",
  description: "Очень хорошо знать JS, чтобы много зарабатывать",
  isCompleted: false,
};
// const taskAnother = {
//   title: "Выучить html и css",
//   description: "Уметь верстать сайты",
//   isCompleted: false,
// };
const cloneAndModify = (object, modifications) => {
  return { ...object, ...modifications };
};

const resultCloneAndModify = cloneAndModify(task, person);
for (const key in resultCloneAndModify) {
  console.log(resultCloneAndModify[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = (object) => {
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
};

callAllMethods(myObject);
