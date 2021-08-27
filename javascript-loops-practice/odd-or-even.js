/* exported oddOrEven */
function oddOrEven(numbers) {
  var newarray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newarray.push('even');
    } else {
      newarray.push('odd');
    }
  }
  return newarray;
}
