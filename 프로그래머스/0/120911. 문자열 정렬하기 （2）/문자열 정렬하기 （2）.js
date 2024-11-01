function solution(my_string) {
    // 소문자로 바꾼다
    // 알파벳 순으로 정렬 >> 오름차순
    return my_string.toLowerCase().split('').sort().join('')
}