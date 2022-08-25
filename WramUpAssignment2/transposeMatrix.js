const transpose = function (matrix) {
    const arr = [];
    for (let i = 0; i < matrix[0].length; i++) {
        arr.push([]);
        for (let j = 0; j < matrix.length; j++) {
            arr[i].push(matrix[j][i]);
        }
    }
    return arr;
};

const transpose1 = transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
console.log('transpose1:', transpose1);

const transpose2 = transpose([
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3],
    [4, 5, 6],
]);
console.log('transpose2:', transpose2);
