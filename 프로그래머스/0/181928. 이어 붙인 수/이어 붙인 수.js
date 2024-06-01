function solution(arr) {
    const odd = arr.reduce((acc,cur) => acc + (cur%2 === 0 ? cur.toString() : ''), '');
    const even =  arr.reduce((acc,cur) => acc + (cur%2 === 1 ? cur.toString() : ''), '');
 return Number(odd) + Number(even)
}