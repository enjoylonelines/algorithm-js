function solution (s, indices) {
    const answer = s.split('').filter((v,i) => (indices.includes(i)? 0 : 1)).join('');
    return answer;
}