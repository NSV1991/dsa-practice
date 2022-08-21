class Solution {
    sum(n) {
        return (n * (n + 1)) / 2;
    }
}

const solution = new Solution();
const sum = solution.sum(99999);
console.log('sum:', sum);
