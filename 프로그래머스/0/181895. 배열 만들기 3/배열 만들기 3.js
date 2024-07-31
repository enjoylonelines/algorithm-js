function solution(arr, intervals) {
    return intervals.reduce((acc,[st, en], idx) => acc.concat(arr.slice(st,en + 1)) ,[])
}