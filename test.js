/* eslint-env mocha */
'use strict'

const assert = require('assert')
const { insertionSort } = require('./algorithms/0-insertion-sort.js')

describe('Test on insertionSort:', function () {
  it('Should sort arrays in ascending and descending order.', function () {
    // Data.
    const tests = [
      {
        toSort: [21, 15, 2, 2, 5, 12],
        ascending: true,
        sorted: [2, 2, 5, 12, 15, 21]
      },
      {
        toSort: [21, 15, 2, 2, 5, 12],
        ascending: false,
        sorted: [21, 15, 12, 5, 2, 2]
      },
      {
        toSort: [-12, -35, 1, 0, 1],
        ascending: true,
        sorted: [-35, -12, 0, 1, 1]
      },
      {
        toSort: [-12, -35, 1, 0, 1],
        ascending: false,
        sorted: [1, 1, 0, -12, -35]
      },
      {
        toSort: [],
        ascending: true,
        sorted: []
      },
      {
        toSort: [],
        ascending: false,
        sorted: []
      },
      {
        toSort: [0],
        ascending: true,
        sorted: [0]
      },
      {
        toSort: [0],
        ascending: false,
        sorted: [0]
      }
    ]

    // Assertions.
    for (const test of tests) {
      insertionSort(test.toSort, test.ascending)
      assert.strictEqual(
        JSON.stringify(test.toSort), JSON.stringify(test.sorted)
      )
    }
  })
})
