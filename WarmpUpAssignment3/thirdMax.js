const thirdMax = function (nums) {
    let firstMax;
    let secondMax;
    let thirdMax;

    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length === 2) {
        return nums[0] > nums[1] ? nums[0] : nums[1];
    }

    for (let i = 0; i < nums.length; i++) {
        if (!firstMax || nums[i] > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = nums[i];
        } else if (nums[i] < firstMax && (!secondMax || nums[i] > secondMax)) {
            thirdMax = secondMax;
            secondMax = nums[i];
        } else if (
            nums[i] < firstMax &&
            nums[i] < secondMax &&
            (!thirdMax || nums[i] > thirdMax)
        ) {
            thirdMax = nums[i];
        }
    }

    return thirdMax === undefined ? firstMax : thirdMax;
};

const result = thirdMax([2,2,3,1]);
console.log('result:', result);

const result1 = thirdMax([1,2]);
console.log('result1:', result1);

const result2 = thirdMax([1,2,-2147483648]);
console.log('result2:', result2);
