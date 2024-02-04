/* 1. Declare an array

  Declare an array with 5 elements containing fruits
  console log the 3rd index element
  change the value of the 2nd index element to jambura
  console log the final array
*/ 

var array1 = ["Apple", "Banana", "Guava", "Jackfruit", "Orange"];

console.log(array1[2]);
array1.splice(2, 1, "Jambura");
console.log(array1);
