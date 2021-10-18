function reduce(array, reducer, initialValue) {
  let previousValue;
  let index;
  if (arguments.length === 3) {
    previousValue = initialValue;
    index = 0;
  } else {
    previousValue = array[0];
    index = 1;
  }
  for (; index < array.length; index++) {
    previousValue = reducer(previousValue, array[index]);
  }
  return previousValue;
}

const productR = (x, y) => x * y;
