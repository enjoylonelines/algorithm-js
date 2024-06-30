function solution(arr)
{
    var answer = [];
    arr.forEach((item, idx) => {
        const cmp = arr[idx + 1]
        if(cmp !== item) {
            answer.push(item);
        } 
    })
    
    return answer;
}