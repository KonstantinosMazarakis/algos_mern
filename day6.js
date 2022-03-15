/*
rotateString(str,num)
Given a string and a number, rotate the string by that number amount and return the rotated string

input: "good morning", 3  ggood mornin
output: "inggood morn"


input: "abcde", 5
output: "abcde"


*/

function rotateString(str,num){
    strDone = ""
    num = num % str.length
for(let i = num;i > 0;i--){
    strDone = strDone + str[str.length-i]
}
for(let x = 0; x <str.length-num;x++){
    strDone = strDone + str[x]
}
return strDone
}

console.log(rotateString("good morning", 3))
console.log(rotateString("good morning", 8))
console.log(rotateString("good morning", 6))
console.log(rotateString("good morning", 555))





/*
isRotation(str1,str2)
Given 2 strings, return true if they are rotations of one another, false if they are not

input: "good morning", "rninggood mo"
output: true



input: "abcde", "abccde"
output: false


*/

function isRotation(str, original) {
    if (str == original){
        return true
    }
    if (str.length != original.length){
        return false
    }
    for (var i = 0; i < str.length;i++)
    if (rotateString(str,i) == original){
        return true
    }else
        return true
    }
    

console.log(isRotation("Hello! My name is Ryan!Hello! It's nice to meet you!", "e is Ryan!Hello! It's nice to meet you!Hello! My nam"));
console.log(isRotation("a", "a"));
console.log(isRotation("", ""));

console.log(isRotation("Hello! My name is Ryan!Hello! It's nice to meet you!", "e is Ryan!o! It's nice to meet you!Hello! My nam"));