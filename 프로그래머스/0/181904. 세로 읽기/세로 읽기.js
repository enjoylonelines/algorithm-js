function solution(my_string, m, c) {
    var answer = '';
    const tmp = [...my_string]
    for(let i = 0; i < my_string.length/m; i++) {
        answer += tmp.slice(i*m, (i+1)*m)[c - 1]
    }
    return answer;
}