const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const smallerPrimes = (number) => {
  if (isNaN(number)) {
    throw new Error('You have to set a number');
  }

  if (number <= 0) {
    throw new Error(`${number} must be above 0`);
  }

  const result = [];

  for (let i = 2; i <= number; i++) {
    const isCurrentNumberPrime = isPrime(i);

    if (isCurrentNumberPrime) {
      result.push(i);
    }
  }
  return result;
};

const results = smallerPrimes(20);

console.log(results);
