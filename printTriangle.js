class Solution {
    printStarTriangle(noOfRows) {
        let str = '';
        for (let i = 0; i < noOfRows; i++) {
            for (let j = 0; j < noOfRows - i; j++) {
                str += '*';
            }
            str += '\n';
        }
        console.log(str);
    }

    printNumberTriangle(noOfRows) {
        let num = 1;
        for (let i = 0; i < noOfRows; i++) {
            let str = '';
            for (let j = 0; j < i + 1; j++) {
                // str += '*';
                str = str + num;
                num++;
            }
            console.log(str);
            // str += '\n';
            console.log('\n');
        }
    }
}

const solution = new Solution();
solution.printStarTriangle(5);
solution.printNumberTriangle(4);
