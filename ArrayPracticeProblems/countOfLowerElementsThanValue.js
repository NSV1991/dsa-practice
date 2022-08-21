class Solution{
    countOfElements(arr,n, x){
        if (!arr) {
            return `arr of ${arr} is not processable. Please provide a valid array of integers.`;
        }
        let resultArray = [];
        
        for(let i=0; i<n; i++) {
            if(arr[i] <= x) {
                resultArray.push(arr[i]);
            }
        }
        
        return resultArray.length;
    }
}

const solution = new Solution();
const array = [10, -20, -30, 40, 50];
const x = 1;
const value = solution.countOfElements(array, array.length, x);
console.log('value:', value);

const error = solution.countOfElements(undefined, array.length, x);
console.log('error:', error);