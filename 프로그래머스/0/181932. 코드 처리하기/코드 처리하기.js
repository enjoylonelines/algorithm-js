function solution(code) {
    let mode = 0;
    let ret = '';
    code.split('').forEach((v,idx) => {
        console.log(mode)
        if(mode === 1) {
            if(v === '1') mode = 0;
            else    idx % 2 === 1 ? ret += v : null;
        } else {
            if(v === '1') mode = 1;
            else    idx % 2 === 0 ? ret += v : null;
        }
    })
    if(!ret) return 'EMPTY'
    else return ret
}
