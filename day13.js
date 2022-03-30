//https://www.rapidtables.com/convert/number/binary-to-decimal.html
function binary2decimal(str){
    let results = 0
    let position = 1
    
    for(var i = str.length-1; i >= 0;i--){
        if(str[i] == 0){
            console.log("dance")
        }else if (str[i] == 1){
            results = results + position
        }
        position = position * 2
    }
    return results
}


console.log(binary2decimal("10111")) //23