function solution(num, k) {
    let index = [...num.toString()].map(char => +char).indexOf(k) 
    return index === -1 ? index : index + 1
    
}