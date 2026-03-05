const factors = []
function solution(a, b) {
    const g = gcd(a, b);
    let mother = b / g;
    
    trial_division(mother);
    
    let len = factors.filter(n => ![2,5].includes(n)).length
    
    return len === 0 ? 1 : 2;
}

function trial_division(n) {
    let d = 2;
    while(d * d <= n) {
        while(n % d === 0) {
            factors.push(d)
            n /= d;
        }
        d++;
    }
    if(n > 1) factors.push(n)
}

function gcd(a, b) {
    while(b !== 0) {
        [a, b] = [b, a%b]
    }
    return a;
}