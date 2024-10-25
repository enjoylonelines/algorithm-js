function solution(progresses, speeds) {
    // 배포 진도 순회?
      let days = progresses.map((progresses, idx) => Math.ceil((100 - progresses) / speeds[idx]));
    
    // 배포 가능일에 따라 n개의 기능이 배포되는지 산출
    let maxDay = 0;
    let cnt = 1;
    let ans = []
    for(let val of days) {
        if(maxDay === 0) maxDay = val;
        else if(maxDay >= val) cnt++;
        else {
            ans.push(cnt);
            maxDay = val;
            cnt = 1;
        }
    }
    ans.push(cnt)
    return ans;
}
