function add(a, b) {
  // Type checking and conversion
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b;
}

console.log(add(2, '2')); // Output: Error: Inputs must be numbers
console.log(add(2, 2)); // Output: 4