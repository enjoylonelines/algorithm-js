function solution(arr) {
    let answer = 1;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j< arr[0].length; j++) {
            if(arr[i][j] !== arr[j][i]) {
                 answer = 0;
                break;
            }
        }
    }
    return answer;

}