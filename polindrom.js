function isPolindrom(s) {
    s = s.toLowerCase();
    let result = false;
    let tmp = "";
    for (let i = s.length-1; i >= 0; i--) {
        tmp = tmp+s[i];
    }
    if (s === tmp) {
        result = true;
    }
    return result;
}

console.log(isPolindrom("Aba"))
console.log(isPolindrom("abc"))
