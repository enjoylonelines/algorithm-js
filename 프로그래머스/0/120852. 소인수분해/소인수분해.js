function solution(n) {
    const set = new Set();
    let num = n;
    while(num > 1) {
        for(let i = 2; i <= num; i++) {        
            if(num % i === 0) {
                set.add(i);
                num = num/i;
                break;
            } 
        }
    }
    return [...set];
}

// 1. 2~n까지 순환하며 나눠지는지 확인
// 2. 나눠지면 그 숫자를 가지고 또 2~n까지 순환하며 나눠지는지확인
// 3. 안나눠지면 계속 순환

