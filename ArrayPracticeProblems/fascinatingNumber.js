class Solution {
    fascinatingNumber(number) {
        const num =
            number.toString() +
            (number * 2).toString() +
            (number * 3).toString();
        let isFascinating = true;
        for (let i = 1; i <= 9; i++) {
            let count = 0;
            for (let j = 0; j < num.length; j++) {
                if (num.charAt(j) == i) count++;
            }
            if (count > 1 || count == 0) {
                isFascinating = false;
                break;
            }
        }
        return isFascinating ? 'Fascinating' : 'Not Fascinating';
    }
}

const solution = new Solution();
const fascinatingNumber = solution.fascinatingNumber(192);
console.log('fascinatingNumber:', fascinatingNumber);
