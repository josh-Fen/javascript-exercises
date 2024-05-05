const sumAll = function (first, second) {
    if (typeof (first) === 'number' &&
        typeof (second) === 'number' &&
        first > 0 &&
        second > 0) {
        const start = first < second ? first : second;
        const end = second > first ? second : first;
        let answer = 0;
        for (let i = start; i <= end; i++) {
            answer += i;
        }
        return answer;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
