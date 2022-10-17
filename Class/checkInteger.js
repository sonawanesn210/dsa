function isInt(input) {
    //input=input+""
    let isInteger = true
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0 && input[i] <= 9) {
            continue;
        } else {
            isInteger = false
            break;
        }
    }
    return isInteger
}
console.log(isInt("11111"))


function int(n) {
    if (typeof n != "number") return false

    let num = Math.round(n)
    if (n != num) return false
    return true
}

console.log(int(15))

