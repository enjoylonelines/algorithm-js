function solution(number) {
    //const cmp1 = number%9;
    const sum = number.split('').reduce((acc, cur) => {
        return acc + +cur;
    }, 0)
    return sum % 9
}