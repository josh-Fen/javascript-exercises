const palindromes = function (str) {
    const strLower = str.toLowerCase();
    const charArr = strLower.split('');
    for (let i = 0; i < charArr.length; i++) {
        if (!charArr[i].match(/[a-z1-9]/i)) {
            charArr.splice(i, 1);
            i--;
        }
    }
    const reversed = charArr.slice().reverse();
    console.log(charArr);
    console.log(reversed);
    return charArr.join() === reversed.join();


};

// Do not edit below this line
module.exports = palindromes;
