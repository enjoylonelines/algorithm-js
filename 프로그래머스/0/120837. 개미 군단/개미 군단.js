function solution(hp) {
    let sum = 0;
    const arr = [5, 3, 1];
    for(let num of arr) {
        sum += Math.trunc(hp / num);
        hp %= num;
    }
    return sum;
}