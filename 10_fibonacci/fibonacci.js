const fibonacci = function(length) {
    if (typeof length === "string") {
        length = Number(length);
      }
    
      if (length <= 0) {
        return "OOPS";
      }
    
      let prev1 = 1; // initialize the first number in the series to 1
      let prev2 = 1; // initialize the second number in the series to 1
      let current = 0; // initialize the current number to 0
    
      for (let i = 2; i < length; i++) {
        current = prev1 + prev2; // sum the previous two numbers to generate the next number in the series
        prev2 = prev1; // set the second previous number to the previous number
        prev1 = current; // set the previous number to the current number
      }
    
      return current || 1; // return the last number in the series, or 1 if length is 1
};

// Do not edit below this line
module.exports = fibonacci;
