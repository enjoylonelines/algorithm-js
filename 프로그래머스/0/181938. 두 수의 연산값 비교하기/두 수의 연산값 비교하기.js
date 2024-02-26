function solution(a, b) {
    let cmp1 = `${a}${b}`;
    cmp1 = Number(cmp1);
    const cmp2 = a * b * 2;
    if(cmp1 > cmp2) answer = cmp1;
    else if(cmp1 < cmp2) answer = cmp2;
    else answer =cmp1;
    return answer
}