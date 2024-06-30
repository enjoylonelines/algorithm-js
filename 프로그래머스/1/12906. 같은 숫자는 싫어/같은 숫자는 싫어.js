function solution(arr)
{
    var answer = [];
    arr.forEach((item, idx) => {
        const cmp = answer.pop();
        if(idx > 0) answer.push(cmp)
        
        if(cmp !== item) {
            answer.push(item);
        } 
    })
    
    return answer;
}