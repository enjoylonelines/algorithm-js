function solution(numer1, denom1, numer2, denom2) {
    let numer11 = numer1 * denom2;
    let numer22 = numer2 * denom1;
    let numer = numer11 + numer22;
    let denom = denom1 * denom2;
    let flag = true;
    while(flag) {
        flag = false;
        for(let i = 2; i < 1000; i++) {
            if(denom % i === 0 && numer % i === 0) {
                numer = numer / i;
                denom = denom / i;
                flag = true;
            }
        }
        console.log(numer, denom)
    }
    return [numer,denom]
    
}