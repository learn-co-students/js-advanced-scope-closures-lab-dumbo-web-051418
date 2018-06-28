function produceDrivingRange (range) {

  return function(locationOne,locationTwo) {
    let distance = Math.abs(parseInt(locationTwo) - parseInt(locationOne));
    if (distance <= range) {
      return `within range by ${range - distance}`;
    }
    else {
      return `${distance - range} blocks out of range`;
    }
  };
}

function produceTipCalculator(tipPercentage) {
  const tipCalc = tipPercentage;
  return function(tipAmount) {
    return tipCalc * tipAmount;
  };
}

function createDriver() {
  let driverId = 0;
  return class{
    constructor (name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
