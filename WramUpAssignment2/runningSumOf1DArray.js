var runningSum = function (nums) {
    const answerArray = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        answerArray.push(sum);
    }
    return answerArray;
};

const runningSum1 = runningSum([1, 2, 3, 4]);
console.log('runningSum1:', runningSum1);
const runningSum2 = runningSum([1, 1, 1, 1, 1]);
console.log('runningSum2:', runningSum2);
const runningSum3 = runningSum([3, 1, 2, 10, 1]);
console.log('runningSum3:', runningSum3);
