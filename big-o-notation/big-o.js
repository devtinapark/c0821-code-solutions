/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    if (!seen[word]) {              // 2 * 1 = O(2n)
      seen[word] = true;
      unique[unique.length] = word; // 3 * 1 = O(3)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * n * n = O(n^2)
      c < i;                        // 1 * n * n = O(n^2)
      c++                           // 2 * n * n = O(2n^2)
    ) {
      const comparing = words[c];   // 2 * n * n = O(2n^2)
      if (comparing === word) {     // 1 * n * n = O(1n^2)
        isUnique = false;           // 1 * n * n = O(1n^2)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 3 * 1 = O(3)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
