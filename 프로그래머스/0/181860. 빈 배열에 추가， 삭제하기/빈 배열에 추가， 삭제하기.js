function add(arr, num) {
    for(let i = 0; i < num*2; i++) {
        arr.push(num)
    }
}
function del(arr, num) {
    for(let i = 0; i< num; i++) {
        arr.pop()
    }
}
function solution(arr, flag) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const isTure = flag[i];
        if(isTure) add(answer, num);
        else del(answer, num)
  
    }
    return answer;
}