function solution(a, b, c, d) {
    let answer = 0;
    const obj = {};
    [a, b, c, d].forEach(num => obj[num] = (obj[num] || 0) + 1);
    
    const keys = Object.keys(obj);
    const len = keys.length;
    
    if(len === 1) {
        const p = keys[0];
        answer = 1111 * p;
    } else if(len === 2) {
        const [p, q] = keys;
        console.log(p, q)
        if(obj[p] > obj[q]) {
            answer = (10 * +p + +q) ** 2;    
        } else if(obj[p] < obj[q]) {
            answer = (10 * +q + +p) ** 2;
        } else {
            answer = (+p + +q) * Math.abs(+p - +q);
        }
    } else if (len === 3) {
        const p = keys[0];
        const q = keys[1];
        const r = keys[2];
        const num1 = obj[keys[0]];
        const num2 = obj[keys[1]];
        if(num1 > num2) {
            answer = q * r;
        } else if (num1 < num2){
            answer = p * r;
        } else {
            answer = p * q;
        }
    } else {
        answer = Math.min(...keys);
    }
    
    
    return answer;
}