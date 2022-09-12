const findTheDifference = function (s, t) {
    if (s.length === 0) {
        return t;
    }

    const ans = {};
    const string = s + t;

    for (let i = 0; i < string.length; i++) {
        if (ans[string[i]] === undefined || ans[string[i]] === 0) {
            ans[string[i]] = 1;
        } else {
            ans[string[i]]--;
        }
    }

    for (let key of Object.keys(ans)) {
        if (ans[key] === 1) {
            return key;
        }
    }
};

const result = findTheDifference('a', 'aa');
console.log('result:', result);

const result1 = findTheDifference('', 'a');
console.log('result1:', result1);

const result2 = findTheDifference('qweqt', 'qweqty');
console.log('result2:', result2);
