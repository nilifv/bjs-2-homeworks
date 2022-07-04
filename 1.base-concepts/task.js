"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let oneRoot;
  let twoRoot;
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    oneRoot = -b / (2 * a);
    arr.push(oneRoot)
  } else if (d > 0) {
    oneRoot = (-b + Math.sqrt(d)) / (2 * a);
    twoRoot = (-b - Math.sqrt(d)) / (2 * a)
    arr.push(oneRoot, twoRoot)
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (typeof percent !== 'number') {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }
  if (typeof contribution !== 'number') {
    return `Параметр "Процентная ставка" содержит неправильное значение "${contribution}"`
  }
  if (typeof amount !== 'number') {
    return `Параметр "Процентная ставка" содержит неправильное значение "${amount}"`
  }


  let totalAmount;
  let s = amount - contribution;

  let nowDate = new Date();
  let year1 = nowDate.getFullYear();
  let year2 = date.getFullYear();
  let month1 = nowDate.getMonth();
  let month2 = date.getMonth();
  if (month1 === 0) {
    month1++;
    month2++;
  }
  let n = (year2 - year1) * 12 + (month2 - month1);
  let p = percent / 12 / 100;

  let amountPerMonth = s * (p + (p / (((1 + p)**n) - 1)));

  totalAmount=(amountPerMonth * n);
  totalAmount=Number(totalAmount.toFixed(2));

  return totalAmount;
}

