// 4. Checking if it's an Array Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

var var1 = 'Abu Bakar';
var var2 = 2001;
var var3 = true;
var var4 = [1, 2, 3, 4, 5];

var check1 = Array.isArray(var1);
console.log(check1); // NOT Array

var check2 = Array.isArray(var2);
console.log(check2); // NOT Array

var check3 = Array.isArray(var3);
console.log(check3); // NOT Array

var check4 = Array.isArray(var4);
console.log(check4); // Array