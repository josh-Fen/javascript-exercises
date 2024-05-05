const leapYears = function (year) {
    let answer = false;
    if (year % 4 === 0) {
        answer = true;
        if (year % 100 === 0 && year % 400 !== 0) {
            answer = false;
        }
    }
    return answer
};

// Do not edit below this line
module.exports = leapYears;
