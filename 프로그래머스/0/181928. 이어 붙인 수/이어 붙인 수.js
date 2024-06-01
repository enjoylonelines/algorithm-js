function solution(arr) {
    const {odd, even}= arr.reduce((acc,cur) => {
        if(cur%2=== 0) return {...acc, odd: acc.odd + cur.toString()}
        else return {...acc, even: acc.even + cur.toString()}
    }, {odd:'', even: ''})
 return +odd + +even;
}