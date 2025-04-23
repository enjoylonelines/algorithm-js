function solution(s) {
    const stack = [];
    const nums = s.split(' ');
    nums.forEach(num => {
        if(num === 'Z') stack.pop();
        else stack.push(num)
    })
    return stack.reduce((acc,cur) => acc + +cur, 0)
}