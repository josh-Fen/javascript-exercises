const fibonacci = function (num) {
    const n = +num;
    if (n < 0) {
        return 'OOPS';
    } else if (n === 0) {
        return 0;
    } else {
        arr = [1, 1];
        for (let i = 3; i <= n; i++) {
            const num1 = arr[i - 3];
            const num2 = arr[i - 2];
            arr.push(num1 + num2);
        }
        return arr[n - 1];
    }
};


// Do not edit below this line
module.exports = fibonacci;
