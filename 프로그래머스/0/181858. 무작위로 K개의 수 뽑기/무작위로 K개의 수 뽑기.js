function solution(arr, k) {
    const uniqueNums = Array.from(new Set(arr)); // 중복 제거
    const ans = [];
    
    for(let i = 0; i < k; i++) {
        if(uniqueNums.length > i) ans.push(+uniqueNums[i]); // 숫자로 변환, 필요시 유지
        else ans.push(-1);
    }
    
    return ans;
}
