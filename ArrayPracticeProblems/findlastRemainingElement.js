class Solution {
    remainingElement(arr, n) {
        arr.sort((a, b) => a - b);
        for (let index = 1; index < n; index++) {
            if (index % 2) {
                arr.pop();
            } else {
                arr.shift();
            }
        }

        return arr[0];
    }
}

const solution = new Solution();
const array = [7, 8, 3, 4, 2, 9, 5];
const value = solution.remainingElement(array, array.length);
console.log('value:', value);
