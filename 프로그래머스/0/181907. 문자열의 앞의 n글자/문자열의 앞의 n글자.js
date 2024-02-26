function solution(my_string, n) {
    let answer = [...my_string]
    answer.splice(n)
    return answer.join('');
}