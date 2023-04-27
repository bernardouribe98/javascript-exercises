const palindromes = function (str) {
    const regex = /[\W_]/g; // matches non-word characters and underscores
    const cleanedStr = str.toLowerCase().replace(regex, ''); // converts to lowercase and removes non-word characters
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
