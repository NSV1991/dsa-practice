//   Clarifying Questions
//   1. What will be range of array values?
//   2. What should be return value or need to print if array is empty?
//   3. Should I expect array value will always be valid and not null or undefined?

// As per implementation
// 1. Assuming range of Array values will be MIN_INTEGER_VALUE < array[i] < MAX_INTEGER_VALUE
// 2. print 0 if array is empty
// 3. return an error message

class Solution {
    sumElement(arr, n) {
        if (!arr) {
            return `arr of ${arr} is not processable. Please provide a valid array of integers.`;
        }
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }
}

const solution = new Solution();
const array = [10, -20, -30, 40, 50];
const value = solution.sumElement(array, array.length);
console.log('value:', value);

const error = solution.sumElement(undefined, array.length);
console.log('error:', error);
