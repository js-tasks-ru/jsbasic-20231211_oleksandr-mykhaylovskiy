function factorial(n) {
  let factorialRes = 1;
  while (n > 0) {
    factorialRes *= +n;
    n -= 1;
  }
  return factorialRes;
}