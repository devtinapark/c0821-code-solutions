/* exported defaults */

function defaults(target, source) {
  for (var key2 in source) {
    if (Object.keys(target).length === 0) {
      target[key2] = source[key2];
    } else {
      if (!Object.keys(target).includes(key2)) {
        target[key2] = source[key2];
      }
    }
  }
}
