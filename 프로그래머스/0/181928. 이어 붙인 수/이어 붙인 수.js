function solution(arr) {
    const odd = arr.filter(e => e%2 === 1);
    const even = arr.filter(e => e%2 === 0);
    return Number(odd.join('')) + Number(even.join(''))
}