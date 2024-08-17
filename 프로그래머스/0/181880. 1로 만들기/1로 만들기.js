function solution(num_list) {
    
    const ans = num_list.reduce((sum, cur, idx) => {
        let cnt = 0;    
        while(cur !== 1) {
            if(cur % 2 === 0){
                cnt++
                cur =  cur/2
            } 
            else {
                cnt++
                cur =  (cur-1)/2
            }
        
        }
        //console.log(cnt)
        return sum += cnt;
    }, 0)
    return ans
}