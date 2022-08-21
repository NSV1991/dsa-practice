class Solution {
    print(arr, n) {
        const result = [];
        for (let i = 0; i < n; i += 2) {
            result.push(arr[i]);
        }

        console.log(result.join(' '));
    }
}

const solution = new Solution();
const array = [10, -20, -30, 40, 50];
solution.print(array, array.length);