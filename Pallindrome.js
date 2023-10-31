var string = "madam";
var strlen = string.length;
var msg = "It is a palindrome string";

for (var i = 0; i < strlen / 2; i++) {
    if (string[i] !== string[strlen - 1 - i]) {
        msg = "It is not a palindrome string";
        break; 
    }
}

console.log(`${string}, ${msg}`);