function solution(s){
    const arr = [];
    for(let char of s) {
        if(char === '(') arr.push(char)
        else {
            if(arr.length === 0) return false;
            else arr.pop()
        }
    }
    return !arr.length 
}