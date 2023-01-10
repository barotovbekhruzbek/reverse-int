module.exports = function reverse (n) {
  function toReadable(n) {
    // Define the arrays of text representations of units, tens, and powers of ten
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const powers_of_ten = ['', '', 'hundred', 'thousand'];
   
    // Edge case for zero 
    if (n === 0) return 'zero';
   
    // Edge case for negative numbers
    if (n < 0) return 'minus ' + toReadable(-n);
    
    let str = '';
    let i = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        let power = Math.floor(n % 1000 / 100);
        let tensDigit = Math.floor(n % 100 / 10);
        if (power !== 0) {
            str = units[power] + ' ' + powers_of_ten[i] + ' ' + str;
        }
        if (tensDigit === 1) {
            let specialTens = n % 10;
            str = (specialTens === 0 ? 'ten' : specialTens === 1 ? 'eleven' : specialTens === 2 ? 'twelve' : specialTens === 3 ? 'thirteen' : specialTens === 4 ? 'fourteen' : specialTens === 5 ? 'fifteen' : specialTens === 6 ? 'sixteen' : specialTens === 7 ? 'seventeen' : specialTens === 8 ? 'eighteen' : 'nineteen') + ' ' + powers_of_ten[i] + ' ' + str;
            break;
        } else if (tensDigit !== 0) {
            str = tens[tensDigit] + ' ' + str;
        }
        if (digit !== 0) {
            str = units[digit] + ' ' + str;
        }
        i++;
    }
    return str;
   }
   
}
