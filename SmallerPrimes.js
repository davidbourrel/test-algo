// prime number is only divided by one or by himself
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

  const primeNumbers = [];

  for (let i = 2; i <= number; i++) {
    const isCurrentNumberPrime = isPrime(i);

    if (isCurrentNumberPrime) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
};

const results = smallerPrimes(10);

console.log(results);
