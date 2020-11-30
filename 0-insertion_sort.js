// SORT LIST BY "INSERTION SORT" ALGORITHM.

'use strict'
var sort_asc = []
var sort_desc = []

 
function move_item(list, from, to) {
  // No negative index allowed.
  let steps = from - to
  if (steps > 0) {
    for (let step = 0; step < steps; step++) {
      [list[from], list[from - 1]] = [list[from - 1], list[from]]
      from -= 1
    }
  } else if (steps < 0) {
    steps = -1 * steps
    for (let step = 0; step < steps; step++) {
      [list[from], list[from + 1]] = [list[from + 1], list[from]]
      from += 1
    }
  }
 
  return list
}


function insertion_sort (list, ascending=true) {
  var index = 0
  let len = list.length
  for (index = 1; index < len; index++) {	
    let back = index - 1  // back + 1 will be the new position of list[index]
    if (ascending) {
      while ((list[index] < list[back]) && (back >= 0)) {
        back -= 1
      }
    } else {
      while ((list[index] > list[back]) && (back >= 0)) {
        back -= 1
      }
    }
    if (index > back + 1) {move_item(list, index, back + 1)}
  } 

  return list
}


console.log('')
sort_asc = [0, 5, 3, 2, 6, 1, 8, 7, 4, 9]
console.log(`Unsorted: ${sort_asc}`) 
console.log(`Ascending: ${insertion_sort(sort_asc, true)}`)

console.log('')
sort_desc = [0, 5, 3, 2, 6, 1, 8, 7, 4, 9]
console.log(`Unsorted: ${sort_desc}`) 
console.log(`Descending: ${insertion_sort(sort_desc, false)}`)



