/* Напиши функцию createCounter, которая возвращает другую функцию. 
Каждый раз при вызове этой внутренней функции счётчик должен увеличиваться на 1 и 
возвращать текущее значение. */

const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
