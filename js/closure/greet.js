/*  
Задача 2: Приветствие по имени
Напиши функцию greet, которая принимает имя и возвращает функцию,
 при вызове которой выводится приветствие с этим именем. */

const greet = (name) => {
  return () => {
    return `Hi ${name}, nice to meet you!`;
  };
};

const Greeting = greet("Bob");
const Greeting2 = greet("Alex");
console.log(Greeting());
console.log(Greeting2());
