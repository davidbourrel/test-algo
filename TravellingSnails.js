const SNAILS_NUMBER = 7;
const HEIGHTS = [10, 5, 8, 3, 25, 7, 9];
const DAY_SPEED = [2, 3, 2, 4, 5, 3, 2];
const NIGHT_SPEED = [1, 2, 1, 3, 1, 2, 0];

const travellingSnails = (snailsNumber, heights, daySpeed, nightSpeed) => {
  const isValidHeights = heights.length === snailsNumber;
  const isValidDaySpeed = daySpeed.length === snailsNumber;
  const isValidNightSpeed = nightSpeed.length === snailsNumber;

  const isInputsValid = isValidHeights && isValidDaySpeed && isValidNightSpeed;

  if (!isInputsValid) {
    throw new Error('Inputs are not valid');
  }

  const snailsResult = [];

  for (let i = 0; i <= snailsNumber - 1; i++) {
    const height = heights[i];
    const dayMeter = daySpeed[i];
    const nightMeter = nightSpeed[i];

    let numberOfDay = 0;
    let totalMeter = 0;

    while (totalMeter < height) {
      // Day mode
      numberOfDay++;
      totalMeter = totalMeter + dayMeter;

      if (totalMeter >= height) {
        snailsResult.push({
          position: i + 1,
          numberOfDay,
        });

        break;
      }

      // Night mode
      totalMeter = totalMeter - nightMeter;
    }
  }

  // Compare number of day with each other
  const orderedSnailsWinner = snailsResult.sort(
    (a, b) => a.numberOfDay - b.numberOfDay
  );

  return orderedSnailsWinner.map((snail) => snail.position);
};

const testResult = travellingSnails(
  SNAILS_NUMBER,
  HEIGHTS,
  DAY_SPEED,
  NIGHT_SPEED
);

// Result should be: [4,2,6,7,5,3,1]
console.log(testResult);
