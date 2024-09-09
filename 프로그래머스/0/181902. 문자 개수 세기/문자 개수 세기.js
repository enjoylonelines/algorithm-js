function solution(str) {
    let arr = new Array(52).fill(0);
    str.split('').forEach((char) => {
        if(char >= 'A' && char <= 'Z') arr[char.charCodeAt(0) - 65]++;
        else arr[char.charCodeAt(0)- 65  - 6]++;    
        console.log()
    })
    return arr;
}      