const threeConsecutiveOdds = function (arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 >= 1 && arr[i + 1] % 2 >= 1 && arr[i + 2] % 2 >= 1) {
            return true;
            break;
        }
    }
    return false;
};

const threeConsecutiveOdds1 = threeConsecutiveOdds([2, 6, 4, 1]);
console.log('threeConsecutiveOdds1:', threeConsecutiveOdds1);

const threeConsecutiveOdds2 = threeConsecutiveOdds([
    1, 2, 34, 3, 4, 5, 7, 23, 12,
]);
console.log('threeConsecutiveOdds2:', threeConsecutiveOdds2);
