function solution (s, indices) {
    return [...s].filter((v,i) => indices.includes(i)? 0 : 1).join('');
    
}