function solution(numbers, target) {
    let ans = 0;
    function getAnswer(idx, sum) {
        if(idx <numbers.length) {
            getAnswer(idx+1, sum + numbers[idx])
            getAnswer(idx+1, sum - numbers[idx])
        } else {
            if(sum === target) ans++;
            return;
        }
    }
    getAnswer(0,0)
    return ans;
}