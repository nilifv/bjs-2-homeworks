// Задание 1
function getArrayParams(arr) {
  let min = Infinity
  let max = -Infinity
  let sum = 0;
  let avg;

  for (let i=0; i<arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
    sum = sum + arr[i]
  }

  avg = Number((sum/arr.length).toFixed(2))

  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams([-99, 99, 10]))


// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }

  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i]);
    }
  }

  return max;
}

const arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20], [100,23,44, -23], [-100,33]]
console.log(makeWork(arrOfArr, worker))


// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i=0; i<arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  return Math.abs(max - min);
}
