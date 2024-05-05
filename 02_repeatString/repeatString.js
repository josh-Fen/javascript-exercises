const repeatString = function (str, num) {
    let answer = '';
    for (let i = 0; i < num; i++) {
        answer += str;
    }
    if (num < 0) {
        answer = 'ERROR';
    }
    return answer;

};

// Do not edit below this line
module.exports = repeatString;
