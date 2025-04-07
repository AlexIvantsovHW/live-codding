/* 
Задача: 1518. Water Bottles (https://leetcode.com/problems/water-bottles/description/)
Сложность: easy
Есть numBottles бутылок с водой, которые изначально наполнены водой. 
Вы можете обменять numExchange пустых бутылок на одну полную бутылку воды на рынке.
Операция питья полной бутылки воды превращает её в пустую бутылку.
Даны два целых числа numBottles и numExchange. 
Верните максимальное количество бутылок с водой, которые вы можете выпить. */

const maxBottleFilledWaterNumber = (numBottles, numExchange) => {
  if (numBottles <= 0 || numExchange <= 0) {
    return "Error in input data";
  }
  let totalDrunk = numBottles;
  let empty = numBottles;

  while (empty >= numExchange) {
    const newFull = Math.floor(empty / numExchange);
    totalDrunk += newFull;
    empty = newFull + (empty % numExchange);
  }
  return totalDrunk;
};
console.log(maxBottleFilledWaterNumber(9, 3));
