function solution(numbers) {
    let sum = numbers.reduce((acc, cur) => acc += cur);
    let avg = sum / numbers.length
    return Math.floor(avg * 10) / 10
}