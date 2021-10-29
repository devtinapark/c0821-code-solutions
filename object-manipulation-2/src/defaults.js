/* exported defaults */

function defaults(target, source) {
  for (var key2 in source) {
    if (typeof target[key2] === 'undefined') {
      target[key2] = source[key2];
    }
  }
}
