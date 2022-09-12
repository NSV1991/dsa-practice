const isHappy = function (n) {
    let array = [...n.toString()];
    let sum = 0;
    while (sum != 1 && sum != 4) {
        sum = sumOfSquares(array);
        array = [...sum.toString()];
    }

    return sum == 1;

    function sumOfSquares(arr) {
        let squareSum = 0;
        for (let i = 0; i < arr.length; i++) {
            squareSum += Number(arr[i]) ** 2;
        }
        return squareSum;
    }
};

const isHappyNumber = isHappy(19);
console.log('isHappyNumber:', isHappyNumber);

const isHappyNumber1 = isHappy(7);
console.log('isHappyNumber1:', isHappyNumber1);

const isHappyNumber2 = isHappy(2);
console.log('isHappyNumber2:', isHappyNumber2);

const isHappyNumber3 = isHappy(2342341);
console.log('isHappyNumber3:', isHappyNumber3);
