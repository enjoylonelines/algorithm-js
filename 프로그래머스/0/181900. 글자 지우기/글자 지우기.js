function solution (s, d) {
    return [...s].reduce((ans, cur, idx)=> (ans += d.includes(idx)? '' : cur), '');
    // ans: 문자열을 저장할 인자, 초기값은 빈문자열
    // cur: 현재 문자열
    // idx: 현재 문자열 인덱스
    // d 배열에 포함된 인덱스는 빈문자열을 반환하고 아니면 현재 문자열을 반환
    // ans에는 d에 포함되지 않는 인덱스 값만 추가됨
}