function getPaired(arr) {
    let result = [];
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            result.push (arr[i]);
        }
    }
    return result;
}

console.log(getPaired([1,2,3,4,5,6]))
