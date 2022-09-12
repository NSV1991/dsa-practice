var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const counter = {};
    for (let i = 0; i < s.length; i++) {
        counter[s.charAt(i)]
            ? counter[s.charAt(i)]++
            : (counter[s.charAt(i)] = 1);
        counter[t.charAt(i)]
            ? counter[t.charAt(i)]--
            : (counter[t.charAt(i)] = -1);
    }

    for (let i = 0; i < Object.values(counter).length; i++) {
        if (Object.values(counter)[i]) return false;
    }
    return true;
};

const isAnagramStr = isAnagram('allergy', 'allergic');
console.log('isAnagramStr:', isAnagramStr);

