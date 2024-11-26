function solution(s) {
    const obj = {};
    [...s].forEach(char => {
        if(!obj[char]) obj[char] = 1
        else obj[char]++
    })
    const arr = Object.keys(obj).filter(key => obj[key] === 1)
    if(arr.length === 0) return '';
    return arr.sort().join('')
}