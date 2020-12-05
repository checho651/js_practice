// SORT LIST BY "DIVIDE AND CONQUER" ALGORITHM.
// ONLY ASCENDING ORDER

'use strict'
var sortAsc = []
var sortDesc = []
var toSort = []


function mergeSort(list, p, q, r) {
  // p, q and r are indexes of list such as p <= q < r; A[p..q+1] and A[q+2..r+1] are in sorted order.
  let floor = list.slice(p, q + 1)
  let roof = list.slice(q + 1, r + 1)
  let sorted = []
  
  while((floor.length > 0) && (roof.length > 0)) {
    if (floor[0] < roof[0]) {
      sorted.push(floor.shift())
    } else {
      sorted.push(roof.shift())
    }
  }
  
  if (floor.length === 0) {
    sorted = sorted.concat(roof)
  } else {
    sorted = sorted.concat(floor)
  }
  
  return sorted
}	 


function divideAndConquerSort(list) {
  let sorted = []
  let groupLen = 2  // Length of ordered groups to merge.
  let lastLimit = 0
  
  // Sort groups of 2 consecutive values.
  for(let i = 0; i < list.length; i++) {
    if (i % 2 !== 0) {
      if (list[i] < list[i - 1]) {
        [list[i], list[i - 1]] = [list[i - 1], list[i]]
      }
    }
  }
  
  while (groupLen < list.length) {
    for (let i = 0; i < list.length; i++) {
      if ((i + 1) % (2 * groupLen) == 0) {
        sorted = sorted.concat(mergeSort(list, i - 2 * groupLen + 1, i - groupLen, i))
      	lastLimit = i
      }
    } 
    if (2 * groupLen > list.length) {
      sorted = sorted.concat(mergeSort(list, 0, groupLen - 1, list.length))
      
      list = sorted.slice()	
      return list
    } 
    if (lastLimit + 1 < list.length && list.length - (lastLimit + 1) > groupLen) {
      sorted = sorted.concat(mergeSort(list, lastLimit + 1, lastLimit + groupLen, list.length))
    } else if (lastLimit + 1 < list.length && list.length - (lastLimit + 1) <= groupLen) {
      sorted = sorted.concat(list.slice(lastLimit + 1, list.length))
    }
    list = sorted.slice()
    sorted = []
    groupLen = groupLen * 2
  }
 
  return list
}


console.log('')
toSort = [15, 14, 19, 5, 10, 23, 2, 17, 9, 21, 8, 13, 4, 24, 6, 18, 1, 16, 20, 3, 12, 0, 22, 7, 11]
console.log(`To Sort: ${toSort}`)
console.log(`Sorted: ${divideAndConquerSort(toSort)}`) 


