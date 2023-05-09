const numbers = [4, 9, 16, 25, 29]; 
let first = numbers.findIndex(myFunction);//creating the func
// this is a function to find the inded 
function myFunction(value, index, array) {
  return value > 18;
}