const moveZeroes = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1));
        }
    }
};

// more optimized solution
const moveZeroes12 = function (arr, n) {
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            arr[j++] = arr[i];
        }
    }
    while (j < n) {
        arr[j++] = 0;
    }
};

const moveZeroes1 = moveZeroes([0, 1, 0, 3, 12]);
console.log('moveZeroes1:', moveZeroes1);

const moveZeroes2 = moveZeroes([0, 0, 1]);
console.log('moveZeroes2:', moveZeroes2);
