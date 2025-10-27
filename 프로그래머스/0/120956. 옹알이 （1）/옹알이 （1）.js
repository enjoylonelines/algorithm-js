function solution(babbling) {
    let cnt = 0;
    const arr = ['aya', 'ye', 'woo', 'ma'];
    
    for(str of babbling) {
        let len = str.length;
       for(word of arr) {
           if(str.includes(word)) {
               len -= word.length;
           }
       }
       if(len === 0) cnt++; 
    }
    
    return cnt;
}