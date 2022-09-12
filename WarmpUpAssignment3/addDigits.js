const addDigits = function (num) {
    if (num == 0) return 0;
    return num % 9 == 0 ? 9 : num % 9;
};

const result = addDigits(4234324324);
console.log('result:', result);

const result1 = addDigits(122);
console.log('result1:', result1);

const result2 = addDigits(0);
console.log('result2:', result2);