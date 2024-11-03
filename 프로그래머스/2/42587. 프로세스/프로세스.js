function solution(pot, loc) {
    let order = 0;
    pot = pot.map((val, idx) => ({val, idx}))
    while(pot.length > 0) {
        let maxEl = Math.max(...pot.map(el => el.val))
        let tmp = pot.shift()
        if(tmp.val === maxEl) {
            order++;
            if(tmp.idx === loc) return order;
        } else {
            pot.push(tmp)
        }
    }
}
