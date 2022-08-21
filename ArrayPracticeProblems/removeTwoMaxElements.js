class Solution {
    remove2MaxElements(arr) {
        arr.sort((a, b) => a - b);
        arr.pop();
        arr.pop();
        return arr;
    }
}

const solution = new Solution();
const array = [7, 8, 3, 4, 2, 9, 5];
const value = solution.remove2MaxElements(array, array.length);
console.log('value:', value);
