function solution(arr) {
    var answer = [];
    arr.map((num) => {
       const newArr = new Array(num).fill(num);
        answer =answer.concat(newArr);
    })
    return answer;
}