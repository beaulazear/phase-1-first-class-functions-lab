const drivers = [`Antonia`, `Nuru`, `Amari`, `Mo`];

const returnFirstTwoDrivers = function() {
    const firstTwo = drivers.slice(0, 2);
    return firstTwo;
}
returnFirstTwoDrivers([`Antonia`, `Nuru`, `Amari`, `Mo`]);

const returnLastTwoDrivers = function() {
    const lastTwo = drivers.slice(2,4);
    return lastTwo;
}
returnLastTwoDrivers([`Antonia`, `Nuru`, `Amari`, `Mo`]);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function() {
    return function(i) {
        return (i * 5);
    }

}
createFareMultiplier();

const fareDoubler = function(createFareMultiplier) {
    const doubled = (createFareMultiplier * 2);
    return doubled;
}

const fareTripler = function(createFareMultiplier) {
    const tripled = (createFareMultiplier * 3);
    return tripled;
}

const selectDifferentDrivers = function(drivers, whichFunction) {
    if ( whichFunction === returnFirstTwoDrivers) {
        drivers = [`Antonia`, `Nuru`];
    } else if ( whichFunction === returnLastTwoDrivers) {
        drivers = [`Amari`, `Mo`];
    }
    return drivers;
}
selectDifferentDrivers;
