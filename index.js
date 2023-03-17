// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return [...arr].slice(0,2);
}

const returnLastTwoDrivers = function(arr) {
    return [...arr].slice(arr.length-2,arr.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i) {
    return (d) => {return i*d}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(d,s) {
    return s(d)
}



