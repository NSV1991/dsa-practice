class Solution {
    isPerfect(arr, n) {
        for(let i=0; i<n; i++) {
            if(arr[i] != arr[n-1-i]) {
                return 'NOT PERFECT';
            }
        }
        
        return 'PERFECT';
    }
}
const solution = new Solution();
const array = [10, -20, -30, -20, 10];
const result = solution.isPerfect(array, array.length);
console.log('result:', result);
