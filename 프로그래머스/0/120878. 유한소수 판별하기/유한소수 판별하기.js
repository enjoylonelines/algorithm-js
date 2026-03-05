const factors = []
function solution(a, b) {
    const g = gcd(a, b);
    let mother = b / g;
    while(mother % 5 === 0) mother /= 5;
    while(mother % 2 === 0) mother /= 2;
    if(mother > 1) return 2;
    else return 1;
}


function gcd(a, b) {
    while(b !== 0) {
        [a, b] = [b, a%b]
    }
    return a;
}