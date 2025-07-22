function solution(sides) {
    const [max, min] = [Math.max(...sides), Math.min(...sides)];
    return (max + min - 1) - (max - min + 1) + 1
}