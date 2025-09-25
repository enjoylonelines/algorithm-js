function solution(dots) {
    let col, row;
    for(let i = 0; i < 4; i++) {
        for(let j = i + 1; j < 4; j++) {
            const [x1, y1] = dots[i];
            const [x2, y2] = dots[j];
            if(x1 === x2) {
                col = Math.abs(y1 - y2)
            } 
            if(y1 === y2) {
                row = Math.abs(x1 - x2)
            }
        }
    }
    return col * row;
}