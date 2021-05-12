'use strict'
/*
Array sort by 'Insertion Sort' Algorithm. Ascending & Descending order.

Input: A sequence of n numbers [a1, a2, ..., an].
  Number.MIN_SAFE_INTEGER < ai < Number.MAX_SAFE_INTEGER
  ai !== null; ai !== undefined
Output: A permutation [a'1, a'2, ..., a'n] of the input sequence such:
  a'1 <= a'2 <= ... <= a'n. Ascending Order.
  a'1 >= a'2 >= ... >= a'n. Descending Order.
Test cases (toSort => ascending; descending):
  [21, 15, 2, 2, 5, 12] => [2, 2, 5, 12, 15, 21]; [21, 15, 12, 5, 2, 2]
  [-12, -35, 1, 0, 1] => [-35, -12, 0, 1, 1], [1, 1, 0, -12, -35];
  [] => []; []
  [0] => [0]; [0]
*/

/**
 * Sorts array in place.
 *
 * @param {Object[]} toSort array to be sorted.
 * @param {boolean} ascending if false will sort from high to low.
 */
function insertionSort (toSort, ascending) {
  const condition = (ascending) ? (a, b) => a < b : (a, b) => a > b
  const lastKey = toSort.length - 1
  for (let key = 0; key <= lastKey; key++) {
    const actualValue = toSort[key]
    let step = 1
    // toSort[-1] = undefined --> condition(value, undefinded) = false.
    while (condition(actualValue, toSort[key - step])) {
      toSort[key - step + 1] = toSort[key - step]
      step++
    }
    toSort[key - step + 1] = actualValue
  }
}

module.exports = { insertionSort }
