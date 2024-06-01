function solution(a, b) {
    const num1 = a.toString();
    const num2 = b.toString();
    const cmp1 = Number(num1 + num2);
    const cmp2 = Number(num2 + num1);
    return cmp1 > cmp2 ? cmp1 : cmp2;    
}