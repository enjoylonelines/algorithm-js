function solution(arr) {
    const [prev, last] = arr.slice(-2);
    return [...arr, last > prev ? last - prev : last * 2];
}