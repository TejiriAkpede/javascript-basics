function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }no
}

console.log(isEven(4));
console.log(isEven(5));

function printNumbers(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(i);
  }
}

printNumbers(1, 10);

function sumNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNumbers(1, 3));
