/* 
Задача: 1056. Confusing Number (https://leetcode.com/problems/confusing-number/)
Сложность: easy

Запутанное число - это число, которое при повороте на 180 градусов становится другим числом,
 каждая цифра которого действительна. 
 Мы можем повернуть цифры числа на 180 градусов, чтобы получить новые цифры.
  Когда 0, 1, 6, 8 и 9 поворачиваются на 180 градусов, они становятся 0, 1, 9, 8 и 6 соответственно.
При повороте на 180 градусов 2, 3, 4, 5 и 7 становятся недействительными. 
Обратите внимание, что после поворота числа мы можем игнорировать ведущие нули. 
Например, после поворота 8000 мы получим 0008, которое считается просто 8.
 Если задано целое число n, верните true, если это запутанное число, или false в противном случае.
*/

const confusingNumber = (number) => {
  if (typeof number != "number") {
    return `invalid input type! number is ${typeof number},but should be number`;
  }
  const confusingList = [0, 1, 6, 8, 9];
  const regularList = [2, 3, 4, 5, 7];
  let regularCheck;
  const numberArr = number
    .toString()
    .split("")
    .map((number) => Number(number));
  if (
    (numberArr.length === 1 &&
      confusingList.includes(numberArr[0]) &&
      numberArr[0] === 6) ||
    numberArr[0] === 9
  ) {
    return true;
  }

  for (let i = 0; i < numberArr.length; i++) {
    regularCheck = regularList.includes(numberArr[i]);
    if (regularCheck) {
      return false;
    }
  }

  if (
    Number(numberArr.join("")) ===
    numberArr.reverse().reduce((acc, cur) => (acc += cur))
  ) {
    return false;
  }

  return !regularCheck;
};
console.log(confusingNumber(69));
