class Solution {
    valueEqualToIndex(arr, n) {
        const result = [];

        for (let i = 1; i < n + 1; i++) {
            if (arr[i - 1] === i) {
                result.push(i);
            }
        }
        return result;
    }
}

const solution = new Solution();
const array = [
    1, 335, 501, 170, 725, 479, 359, 963, 465, 706, 146, 12, 828, 962, 492, 996,
    943, 828, 437, 392, 605, 903, 154, 293, 383, 422, 717, 719, 896, 448, 727,
    772, 539, 870, 913, 668, 300, 36, 895, 704, 812, 323,
];
const result = solution.valueEqualToIndex(array, array.length);
console.log('result:', result.join(' '));