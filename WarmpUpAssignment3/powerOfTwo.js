var isPowerOfTwo = function (n) {
    return (n > 0) & ((n & (n - 1)) === 0) ? true : false;
};

const isPowerOfTwo1 = isPowerOfTwo(7);
console.log('isPowerOfTwo1:', isPowerOfTwo1);

const isPowerOfTwo2 = isPowerOfTwo(2);
console.log('isPowerOfTwo2:', isPowerOfTwo2);

const isPowerOfTwo3 = isPowerOfTwo(2342341);
console.log('isPowerOfTwo3:', isPowerOfTwo3);
