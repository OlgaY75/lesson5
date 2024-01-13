function reverseFunc(s) {
    let result = "";
    for (let i = s.length-1; i >= 0; i--) {
        result = result + s[i];
    }
    return result;
}

console.log(reverseFunc("Ihor"));
