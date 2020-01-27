// Test Cases einsehen:

const { execSync } = require('child_process');
console.log('****vor exec');
let s = execSync('cat challenge/tests/polynomialDivision.test.js');
console.log(s.toString())
console.log('****nach exec');

