function solution(common) {
    const d1 = common[1] - common[0];
    const d2 = common[2] - common[1];
    const len = common.length;
    if(d1 === d2) {
        return d1 + common[len - 1];
    } else {
        const r = common[1] / common[0];
        return r * common[len - 1];
    }
}