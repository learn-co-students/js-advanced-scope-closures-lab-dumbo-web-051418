function produceDrivingRange(blockRange) {
  return (start, end) => {
    const reqRange = end.slice(0,2) - start.slice(0,2)
    if (reqRange > blockRange) {
      const difference = reqRange - blockRange
      return `${difference} blocks out of range`
    } else if (reqRange < blockRange) {
      const difference = blockRange - reqRange
      return `within range by ${difference}`
    };
  };
};

function produceTipCalculator(percentTip) {
  return (fare) => {
    return fare * percentTip
  };
};

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    };
  };
};
