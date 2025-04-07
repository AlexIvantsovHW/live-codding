/* Задав массив целых чисел arr,
 верните true тогда и только тогда, когда он является допустимым горным массивом. 
 Напомним, что arr является горным массивом тогда и только тогда, когда: 
 arr.length >= 3 Существует некоторое i с 0 < i < arr.length - 1 такое,
  что: arr[0] < arr[1] < ... < arr[i - 1] < arr[i] arr[i] > arr[i + 1] > ... > arr[arr.length - 1] */
const validMountainArray = function (arr) {
  if (!Array.isArray(arr)) {
    return false;
  } else if (arr.length < 3) {
    return false;
  } else {
    const maxValue = arr.reduce((max, curV) => (max > curV ? max : curV));
    const maxValueIdx = arr.findIndex((idx) => idx === maxValue);
    if (maxValueIdx === 0 || arr.at(-1) === arr[maxValueIdx]) {
      return false;
    }

    for (let i = 0; i < maxValueIdx; i++) {
      const check = arr[i + 1] - arr[i] > 0 ? true : false;
      if (!check) {
        return false;
      }
    }
    for (let i = maxValueIdx; i < arr.length; i++) {
      const check =
        arr[i] - arr[i + 1] > 0
          ? true
          : isNaN(arr[i] - arr[i + 1])
          ? true
          : false;
      if (!check) {
        return false;
      }
    }
    return true;
  }
};

console.log(validMountainArray([0, 3, 2, 1]));
