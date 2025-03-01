function solution(numbers, k) {
    let ans = 0;
    let idx = 0;
    for(let i = 0; i < k - 1; i++) {
        idx +=2;
        if(idx > numbers.length - 1) {
            idx = idx - numbers.length; //이게 핵심이네
        }
        ans = numbers[idx]
    }
    return ans;
}
