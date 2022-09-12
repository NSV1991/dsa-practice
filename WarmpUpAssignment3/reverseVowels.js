const reverseVowels = function (s) {
    const strArr = [...s];
    let counter1 = 0;
    let counter2 = strArr.length - 1;
    while (counter1 < counter2) {
        if (checkVowel(strArr[counter1]) && checkVowel(strArr[counter2])) {
            const firstChar = strArr[counter1];
            strArr[counter1] = strArr[counter2];
            strArr[counter2] = firstChar;
            counter1++;
            counter2--;
        }

        if (!checkVowel(strArr[counter1])) {
            counter1++;
        }

        if (!checkVowel(strArr[counter2])) {
            counter2--;
        }
    }

    function checkVowel(char) {
        return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(
            char
        );
    }

    return strArr.join('');
};

const result = reverseVowels('meayl');
console.log('result:', result);

const result2 = reverseVowels('leetcode');
console.log('result2:', result2);
