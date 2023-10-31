var string = "Devendra";
 var strlen = string.length;
var strreverse = '';
for(var i = strlen-1; i >= 0; i--){
    strreverse += string[i]
}
console.log(`Reverse string of ${string} is ${strreverse}`)