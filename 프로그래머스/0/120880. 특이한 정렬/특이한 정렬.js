function solution(numlist, n) {
    numlist = numlist.map(num => {
        return {
            dist: Math.abs(num - n),
            num: num
        }
    });
    numlist = numlist.sort(compare)
    return numlist.map(num => num.num)
}

function compare(a, b) {
    if(a.dist === b.dist) return b.num - a.num;
    return a.dist - b.dist;
}

