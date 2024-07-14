function solution(my_string) {
    const arr = [...my_string].reverse();
    return arr.map((_, idx) => arr.slice(0, idx + 1).reverse().join('')).sort();
}