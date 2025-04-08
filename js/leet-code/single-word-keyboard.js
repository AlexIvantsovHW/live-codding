/* Есть специальная клавиатура, на которой все клавиши расположены в один ряд.

Дана строка keyboard длиной 26, указывающая на раскладку клавиатуры (индексирована от 0 до 25). 
Изначально ваш палец находится на индексе 0. Чтобы напечатать символ, нужно переместить палец на индекс нужного символа. 
Время, затраченное на перемещение пальца с индекса i на индекс j, равно |i - j|.
Вам нужно напечатать строку word. Напишите функцию для расчета времени, необходимого для её набора одним пальцем 
1165. Single-Row Keyboard (https://leetcode.com/problems/single-row-keyboard/description/)
*/

const singleWordKeyboard = (word) => {
  const keyboard = "abcdefghijklmnopqrstuvwxyz";
  if (word.split("") === 0) {
    return false;
  }
  const lWord = word.toLowerCase();
  const chars = lWord.split("");
  let sum = [];
  let steps = [];

  for (let i = 0; i < chars.length; i++) {
    const check = keyboard.match(new RegExp(chars[i], "i"));
    sum.push(check.index);
  }
  for (let i = 0; i < sum.length; i++) {
    if (isNaN(sum[i + 1])) {
      steps.push(sum.at(-1) - sum[0]);
    } else {
      steps.push(sum[i + 1] - sum[i]);
    }
  }
  return steps
    .map((step) => {
      return step < 0 ? step * -1 : step;
    })
    .reduce((sum, cur) => (sum += cur));
};

console.log(singleWordKeyboard("abcda"));
