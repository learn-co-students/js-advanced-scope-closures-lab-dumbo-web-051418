function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
    let beg = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distance = Math.abs(beg - end);

    if (blockRange >= distance){
      return `within range by ${blockRange - distance}`;
    } else{
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(fare){
  return function(percent){
    return fare * percent;
  }
}
