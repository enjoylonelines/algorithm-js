function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length > arr2.length) answer = 1;
    else if(arr1.length < arr2.length) answer = -1;
    else{
        const sum1 = arr1.reduce((acc, cur, idx) => acc += cur);
        const sum2 = arr2.reduce((acc, cur, idx) => acc += cur);
        if(sum1 > sum2) answer = 1;
        else if(sum1 < sum2) answer = -1;
        else answer = 0;
    }
    return answer;
}