/*

input: "sweet potato"

output: "swet poa"

*/


function dedupeString(str){
    let newSTR = ""
for(let i = 0;i < str.length;i++){
    let duplicate = false
    for(x = 0;x < i ;x++){
        if(str[i] == str[x]){
            duplicate = true
        }
    }
    duplicate == false?newSTR = newSTR + str[i]:null
}
return newSTR
}


console.log(dedupeString("sweet potato")) //"swet poa"
console.log(dedupeString("helooo woorldd")) // helo wrd
