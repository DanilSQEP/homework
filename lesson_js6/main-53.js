// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 25, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }
users.push({ name: "Ann", age: 19, isAdmin: false });
users.push({ name: "Jack", age: 43, isAdmin: true });
console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
const getUserAverageAge = (users) => {
  let sum = 0,
    count = 0;

  users.forEach((user) => {
    sum += user.age;
    count++;
  });
  return Math.round(sum / count);
};
console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
const getAllAdmins = (users) => {
  admins = [];

  users.forEach((user) => {
    if (user.isAdmin) {
      admins.push(user);
    }
  });
  return admins;
};
console.log(getAllAdmins(users));
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
const arr = [1, 2, 3, 4, 5, 6];

const first = (arr, n = 1) => {
  if (arr.length < n) {
    console.error(`Аргумент n не может быть больше длины массива: ${arr.length}.`);
    return;
  }

  if (n === 0) {
    return [];
  }

  const newArray = new Array(n);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = arr[i]
  }
  return newArray;
};

console.log(first(arr));
console.log(first(arr, 0));
console.log(first(arr, 3));
console.log(first(arr, 6));
console.log(first(arr, 7));
