function solution(q, r, code) {
    return code.split('').filter((v, idx) => idx%q === r ? v : null).join('');
}