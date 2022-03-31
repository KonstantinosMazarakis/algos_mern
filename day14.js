function dec2hex(num) {
    if (num === 0) {
        return num;
    }

    let output = '';
    let remainder = [];
    let convert = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };

    while (num > 0) {
        remainder.push(num % 16);
        num = Math.floor(num / 16);
    }

    for (let i = remainder.length - 1; i >= 0; i--) {
        if (remainder[i] >= 10) {
            output += convert[remainder[i]];
        } else {
            output += remainder[i];
        }
    }

    return output;
}