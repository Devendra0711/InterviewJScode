var a = 10;
var b = 20;
var temp;
temp = a;
a = b;
b = temp;
console.log(`the value of a is ${a} and the value of b is ${b}`);

//Without using third variable

var a = 10;
var b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(`After Swapping: The value of a is ${a} and the value of b is ${b}`)