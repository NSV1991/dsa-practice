class Solution {
    sumElement(arr, n) {
        let sumFirstHalf = 0;
        let sumSecondHalf = 0;
        for (let i = 0; i < n; i++) {
            if (i < n / 2) {
                sumFirstHalf += arr[i];
            } else {
                sumSecondHalf += arr[i];
            }
        }
        return Math.abs(sumFirstHalf - sumSecondHalf);
    }
}

const solution = new Solution();
const array = [10, 20, 30, 40, 50, 40];
const value = solution.sumElement(array, array.length);
console.log('value:', value);
