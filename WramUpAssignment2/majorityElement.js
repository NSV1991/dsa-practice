const majorityElement = function (nums) {
    const answer = {};
    for (let i = 0; i < nums.length; i++) {
        if (answer[nums[i]]) {
            answer[nums[i]]++;
        } else {
            answer[nums[i]] = 1;
        }
    }

    for (const [key, value] of Object.entries(answer)) {
        if (value > nums.length / 2) {
            return key;
        }
    }
};

const majorityElement1 = majorityElement([3, 2, 3]);
console.log('majorityElement1:', majorityElement1);

const majorityElement2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log('majorityElement2:', majorityElement2);
