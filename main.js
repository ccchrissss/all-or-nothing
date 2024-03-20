function possiblyPerfect(key,answers) {

  let filteredKey = key.filter( e => e !== '_')

  const keyAnswersShownTotal = filteredKey.length
  let correctness = 0
  let incorrectness = 0

  for (let i = 0; i < key.length; i++) {
    
    if (key[i] === answers[i]) {
      correctness++
    }
    
    if (key[i] !== '_' && key[i] !== answers[i]) {
      incorrectness++
    }
    
  }

  if (correctness === keyAnswersShownTotal) return true

  if (incorrectness === keyAnswersShownTotal) {
    return true
  } else { 
    return false
  }

}


console.log(possiblyPerfect(['A', 'B', '_', 'D'], ['C', 'A', 'D', 'B']))


// parameters: key, answers   // two arrays of strings
// return boolean   // if still possible to get all answers correct or incorrect
// e.g. possiblyPerfect(['A', 'B', '_', 'B'], ['A', 'B', 'D', 'B'])
// results in true

// filter out the '_' to determine the length of the key array with answers shown
// assign a variable keyAnswersShownTotal to that value
// assign a varaible correctness to the number 0
// assign a variable incorrectness to the number 0
// loop through both arrays
  // if key[i] === answers[i] then add and reassign 1 to correctness
  // if key[i] !== '_' && key[i] !== answers[i] then add and reassign 1 to incorrectness
  // end loop
// if correctness === keyAnswersShownTotal return true
// if incorrectness === keyAnswersShownTotal return true
// else return false


