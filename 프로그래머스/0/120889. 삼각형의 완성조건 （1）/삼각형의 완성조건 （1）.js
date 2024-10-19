function solution(sides) {
    sides.sort((a,b) => a - b)
    const [a, b, c] = sides;
    if(a + b > c) return 1;
    else return 2;
    
}