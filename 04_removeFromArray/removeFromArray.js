const removeFromArray = function (arr, ...args) {
    arr = arr.filter((item) => !args.includes(item));

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
