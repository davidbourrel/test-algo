const palindromeCheck = (word) => {
  if (word.length === 0) {
    return 'String should not be empty!';
  }
  if (typeof word !== 'string') {
    return 'It must be a string.';
  }

  const letters = [...word];

  const wordSplitInKeyValue = letters.reduce((total, letter) => {
    // increment +1 if letter already exist or set 1 if not
    total[letter] = (total[letter] ?? 0) + 1;
    return total;
  }, {});

  //
  const oddLetterCountResult = Object.values(wordSplitInKeyValue).filter(
    (count) => count % 2 !== 0
  );

  const MAX_ODD_LETTER = 1;

  const isPalindrom = oddLetterCountResult.length <= MAX_ODD_LETTER;

  return isPalindrom;
};

const FIRST_EXAMPLE = 'nssnoo';
const SECOND_EXAMPLE = 'abctpm';

const result1 = palindromeCheck(FIRST_EXAMPLE);
const result2 = palindromeCheck(SECOND_EXAMPLE);

console.log(`${FIRST_EXAMPLE} :`, result1);
console.log(`${SECOND_EXAMPLE} :`, result2);
