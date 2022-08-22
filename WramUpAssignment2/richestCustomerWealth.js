var maximumWealth = function (accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }

    return maxWealth;
};

const richestPersonWealth1 = maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
]);
console.log('richestPersonWealth1:', richestPersonWealth1);
const richestPersonWealth2 = maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
]);
console.log('richestPersonWealth2:', richestPersonWealth2);
const richestPersonWealth3 = maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
]);
console.log('richestPersonWealth3:', richestPersonWealth3);
