function forLoop(array) {
  // Create a for loop to add items to the array 
  for(let i = 0; i < 25; i++) {
      array.push(`I am ${i} strange loop${i == 1 ? '' : 's'}.`)
  }
  return array
}



function whileLoop(n) {
  let i  = n 
  while (i > 0) {
    console.log(--i)
  }
  return "done"
}

