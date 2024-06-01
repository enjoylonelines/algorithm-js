function solution(n) {
    const arr = new Array(n).fill().map((_,i) => i + 1);
    console.log(arr)
    if(n%2 === 0) return arr.reduce((acc, cur) => acc + (cur%2 === 0 ? cur*cur : 0), 0);
    else return arr.reduce((acc, cur) => acc + (cur%2 === 1 ? cur : 0), 0);
    
}