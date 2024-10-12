function solution(array) {
    return array.reduce((acc, cur, idx) => {
       if(acc[0] < cur) return acc = [cur, idx] 
        else return acc
    },[0])
}