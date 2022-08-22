var numJewelsInStones = function(jewels, stones) {
    let jewelCount = 0;
    for(let i=0; i<jewels.length; i++) {
        for(let j=0; j<stones.length; j++) {
            if(jewels.charAt(i) == stones.charAt(j)) {
                jewelCount++;
            }
        }
    }
    return jewelCount;
};

const jewelCount1 = numJewelsInStones("aA", "aAAbbbb");
console.log('jewelCount1:', jewelCount1);

const jewelCount2 = numJewelsInStones("z", "ZZas");
console.log('jewelCount2:', jewelCount2);