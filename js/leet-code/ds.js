/* 
1464. Maximum Product of Two Elements in an Array 
(https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/)
Дан массив целых чисел nums, выберите два разных индекса i и j этого массива. 
Верните максимальное значение (nums[i]-1)*(nums[j]-1). 
*/
const maxProduct = function (nums) {
  const arrLength = nums.length;
  const i = Math.floor(Math.random() * arrLength);
  const j = Math.floor(Math.random() * arrLength);
  const result = (nums[i] - 1) * (nums[j] - 1);
  return result;
};

console.log(maxProduct([1, 2, 3, 4, 5, 6]));
