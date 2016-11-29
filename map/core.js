function multiplyBy10(array) {
    return array.map(function(num) {
        return num * 10;
    });
};

function shiftRight(array) {
    var result = array;
    result.splice(0, 0, result[result.length - 1]);
    result.splice(result.length - 1, 1)
    return result;
};

function onlyVowels(array) {
    return array.map((letter) => {
        return letter.replace(/[qwrtypsdfghjklzxcvbnm]/ig, '')
    });
}

function doubleMatrix(array) {
    return array.map((arr) => {
        return arr.map((matrix) => {
            return matrix * 2;
        })
    })
};


module.exports = {
    multiplyBy10: multiplyBy10,
    shiftRight: shiftRight,
    onlyVowels: onlyVowels,
    doubleMatrix: doubleMatrix
};;
