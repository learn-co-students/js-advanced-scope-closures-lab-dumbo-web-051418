// + `produceDrivingRange()` - Returns a function that then calculates whether a
// given trip is within range.  For example, `produceDrivingRange(10)` returns a
// function that will return `false` if the trip is over 10 blocks distance and
// `true` if the distance is within range.  So `produceDrivingRange` returns a
// function that we can then use to calculate if a trip is too large for a driver.
// We recommend referencing the `test/indexTest.js` for more details.

function produceDrivingRange(blockRange) {
  return function(start, end) {
    difference = Math.abs(Number.parseInt(end.slice(0,2))-Number.parseInt(start.slice(0,2)));
    if (difference > blockRange) {
      return `${difference - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - difference}`;
    }
  }
}

// + `produceTipCalculator()` - Returns a function that then calculates a tip.
// For example, `produceTipCalculator(.10)` returns a function that calculates ten
// percent tip on a fare.  `produceTipCalculator(.20)` returns a function that
// calculates twenty percent tip on a fare.

// These closures are great because they enable us to use these newly created
// specific functions later

function produceTipCalculator(percent) {
  return function(fare) {
    return fare*percent;
  }
}

//
// + `createDriver` returns a function that returns a class that produces a Driver
// class.  The class has reference to a driverId that is incremented each time a
// new driver is created.  The rest of the code base does not have access to
// driverId.
function createDriver(name) {
  return function Driver(name) {
    this.name = name;
    Driver.prototype.id += 1;
  }
}
