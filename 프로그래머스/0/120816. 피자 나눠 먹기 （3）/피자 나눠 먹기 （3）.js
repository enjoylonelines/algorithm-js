function solution(slice, n) {
    if(n % slice === 0) return Math.trunc(n / slice) ;
    else return Math.trunc(n / slice) + 1;
}