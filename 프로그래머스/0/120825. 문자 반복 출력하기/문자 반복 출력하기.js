function solution(my_string, n) {
    return my_string.split('').map(char => Array(n).fill(char).join('')).join('')
}