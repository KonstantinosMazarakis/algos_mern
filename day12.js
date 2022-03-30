

function dec2binary(num){
    let output = "";
    while (num > 0){
        if (num % 2 == 1) {
            output += 1
            num = Math.floor(num / 2)
        } else {
            output += 0
            num = Math.floor(num / 2)
        }
    }
    return output.split("").reverse().join("");
}


console.log(dec2binary(23))