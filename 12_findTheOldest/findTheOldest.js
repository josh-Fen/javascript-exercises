const findTheOldest = function (arr) {
    return arr.reduce((obj, element) => {

        if (!obj.yearOfBirth) {
            return element;
        }

        const birth = element.yearOfBirth;
        const death = element.yearOfDeath ? element.yearOfDeath : new Date().getFullYear();
        const yearsAlive = death - birth;

        const objBirth = obj.yearOfBirth;
        const objDeath = obj.yearOfDeath ? obj.yearOfDeath : new Date().getFullYear();
        const objYearsAlive = objDeath - objBirth;

        return yearsAlive > objYearsAlive ? element : obj;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
