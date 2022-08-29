const minimumAbsDifference = function (arr) {
    let minimumAbsDiff = Number.MAX_SAFE_INTEGER;
    const ans = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) < minimumAbsDiff) {
            minimumAbsDiff = Math.abs(arr[i] - arr[i + 1]);
            ans = [];
            ans.push([arr[i], arr[i + 1]]);
        } else if (Math.abs(arr[i] - arr[i + 1]) == minimumAbsDiff) {
            ans.push([arr[i], arr[i + 1]]);
        }
    }
    return ans;
};
const minimumAbsDifference1 = minimumAbsDifference([40, 11, 26, 27, -20]);
console.log('minimumAbsDifference1:', minimumAbsDifference1);

const minimumAbsDifference2 = minimumAbsDifference([
    3, 8, -10, 23, 19, -4, -14, 27,
]);
console.log('minimumAbsDifference2:', minimumAbsDifference2);
