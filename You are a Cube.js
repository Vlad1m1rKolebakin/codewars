Solution;
1;
function youAreACube(num) {
  2;
  if (num < 1) return false; // Проверка на положительное число
  3;
  let left = 0;
  4;
  let right = num;
  5;
  while (left <= right) {
    6;
    const mid = Math.floor((left + right) / 2);
    7;
    const midCubed = mid * mid * mid;
    8;
    if (midCubed === num) {
      9;
      return true;
      10;
    } else if (midCubed < num) {
      11;
      left = mid + 1;
      12;
    } else {
      13;
      right = mid - 1;
      14;
    }
    15;
  }
  16;
  return false;
  17;
}
