function produceDrivingRange(range){
  return function(initial, final){
    let pickup = initial.split("th")[0];
    let dropoff = final.split("th")[0];
    let min = Math.min(pickup, dropoff);
    let max = Math.max(pickup, dropoff);
    let difference = (min + range) - max;
    if(difference > 0){
      return `within range by ${difference}`;
    } else if(difference < 0){
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage){
  return function(value){
    return value * percentage;
  }
}
