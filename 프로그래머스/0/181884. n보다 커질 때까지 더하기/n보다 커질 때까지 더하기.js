function solution(numbers, n) {
    let cmp = 0;
    for(let i = 0; i < numbers.length; i++) {
        cmp += numbers[i];
        if(cmp > n) break;
    }
    
    return cmp;
}