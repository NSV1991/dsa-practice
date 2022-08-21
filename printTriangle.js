class Solution {
    printTriangle(noOfRows) {
        let row = '';
        for (let i = 0; i < noOfRows; i++) {
            for (let index = noOfRows; index > 0; index--) {
                row = row + '*';
                // console.log('\n');
            }
        }
        console.log('row:', row);
    }
}

const solution = new Solution();
solution.printTriangle(5);
