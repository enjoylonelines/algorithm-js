function solution(str1, str2) {
    const str = [];
    let idx = 0;
    for(let i = 0; i < str1.length * 2; i++) { // 문자열 인덱스는 5까지임
        str[idx++] = str1[i];
        str[idx++] = str2[i];
    }
    return str.join('');
}