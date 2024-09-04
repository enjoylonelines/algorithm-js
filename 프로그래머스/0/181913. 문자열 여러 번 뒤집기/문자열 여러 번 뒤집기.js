function solution(str, queries) {
    let ans = str.split('')
    for(let i = 0; i < queries.length; i++) {
        const [st, en] = queries[i];
        ans = [...ans.slice(0,st), ...ans.slice(st,en+1).reverse(), ...ans.slice(en+1,ans.length) ]
    }
    return ans.join('')
}