function solution(cipher, code) {
    return cipher.split('').map((char, idx) => {
        if((idx + 1) % code === 0) return char;
        else return '';
    }).join('')
}