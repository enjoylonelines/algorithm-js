function solution(array) {
    const obj = {};
    array.forEach(el => obj[el] = (obj[el] || 0) + 1);
    const entries = Object.entries(obj);
    const maxCount = Math.max(...entries.map(([_, count]) => count));
    const modeCandidates = entries.filter(([_, count]) => count === maxCount); 
    if (modeCandidates.length > 1) return -1; 
    return Number(modeCandidates[0][0]);
}
