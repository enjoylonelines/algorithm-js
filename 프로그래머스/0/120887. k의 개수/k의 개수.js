function solution(i, j, k) {
    const obj = {};
    for(let num = i; num <= j; num++) {
        const str = num.toString().split('');
        str.forEach(char => obj[char] = (obj[char] || 0) + 1)
    }
    const answer = obj[k] || 0
    return answer
}