module.exports = function reverse (n) {
  
    let reversedNum = 0;
    let absNum = Math.abs(n); // Convert to positive number
    while (absNum > 0) {
        reversedNum = (reversedNum * 10) + (absNum % 10);
        absNum = Math.floor(absNum / 10);
    }
    return n < 0 ? -reversedNum : reversedNum;
}



  
  

  


