function solution(score) {
    const avg = score.map(([x,y]) => (x + y) / 2)
    const rank = [...avg].sort((a,b) => b - a);
    return avg.map(v => rank.indexOf(v) + 1)
}