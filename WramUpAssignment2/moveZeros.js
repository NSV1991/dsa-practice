const moveZeroes = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1));
        }
    }
};

const moveZeroes1 = moveZeroes([0, 1, 0, 3, 12]);
console.log('moveZeroes1:', moveZeroes1);

const moveZeroes2 = moveZeroes([0, 0, 1]);
console.log('moveZeroes2:', moveZeroes2);
