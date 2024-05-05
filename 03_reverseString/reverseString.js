const reverseString = function (str) {
    const forward = [];
    const reversed = [];
    for (let i = 0; i < str.length; i++) {
        forward.push(str.charAt(i));
    }
    for (let i = forward.length - 1; i >= 0; i--) {
        reversed.push(forward[i]);
    }
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
