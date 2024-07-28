function solution(n) {
    var answer = [[]];
    for(let i = 0; i < n; i++) {
        let tmp = [];
        for(let j = 0; j < n; j++) {
            if(i === j) tmp.push(1)
            else tmp.push(0)
        }
        answer[i] = tmp
    }
    return answer;
}