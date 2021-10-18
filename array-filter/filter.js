function filter(array, predicate) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const inputElement = array[i];
    if (predicate(inputElement)) {
      newArray.push(inputElement);
    }
  }
  return newArray;
}

const evenPredicate = number => number % 2 === 0;
