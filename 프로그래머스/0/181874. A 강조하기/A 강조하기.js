function solution(myString) {
    var answer = '';
    answer = [...myString].map((v) => {
        if(v === 'a') v = 'A';
        else if(v !== 'A' && v == v.toUpperCase()) v = v.toLowerCase();
        return v;
    }).join('');
    return answer;
}