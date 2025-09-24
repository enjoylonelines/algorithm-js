function solution(spell, dic) {
    let cnt;
    for(let word of dic) {
        cnt = 0;
        for(let char of spell) {
            if(!inc(word, char)) break;
            cnt++;
        }
        if(spell.length === cnt) return 1;
    }
    
    return 2;
}
    
function inc(str, char) {
    return str.includes(char);
}