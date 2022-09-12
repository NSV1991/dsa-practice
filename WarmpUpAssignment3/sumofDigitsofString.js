const getLucky = function (s, k) {
    let numString = '';
    for (let i = 0; i < s.length; i++) {
        numString = numString + (s.charCodeAt(i) - 96).toString();
    }
    while (k > 0) {
        let sum = 0;
        for (let i = 0; i < numString.length; i++) {
            sum += Number(numString.charAt(i));
        }
        numString = sum.toString();
        k--;
    }

    return parseInt(numString);
};

const result = getLucky('iiii', 3);
console.log('result:', result);

const result1 = getLucky('leetcode', 2);
console.log('result1:', result1);

const result2 = getLucky('zbax', 1);
console.log('result2:', result2);
