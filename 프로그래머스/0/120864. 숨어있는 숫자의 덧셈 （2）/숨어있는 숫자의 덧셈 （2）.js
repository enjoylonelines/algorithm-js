function solution(my_string) {
    const result = [];
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i]) && my_string[i] !== " ") { // 숫자 확인 (공백 제외)
            let s = i;
            while (s < my_string.length && !isNaN(my_string[s]) && my_string[s] !== " ") s++;
            result.push(my_string.slice(i, s)); // 숫자 문자열 저장
            i = s - 1; // 다음 숫자 탐색 방지
        }
    }

    // 숫자로 변환하면서 빈 문자열을 제외
    return result
        .filter(num => num !== "") // 빈 문자열 제외
        .map(Number) // 숫자로 변환
        .reduce((acc, cur) => acc + cur, 0); // 합산
}
