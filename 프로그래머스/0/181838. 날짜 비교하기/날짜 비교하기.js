function solution(date1, date2) {
    const [y1, m1, d1] = date1;
    const [y2, m2, d2] = date2;
    return new Date(`${y1}.${m1}.${d1}`) - new Date(`${y2}.${m2}.${d2}`) < 0 ? 1 : 0;
        
}