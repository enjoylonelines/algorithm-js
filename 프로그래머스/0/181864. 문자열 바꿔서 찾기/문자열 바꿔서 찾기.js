function solution(myString, pat) {
    myString = [...myString].map(item => {
        if(item === 'A') return 'B';
        else return 'A';
    }).join('')
    return +myString.includes(pat)
}