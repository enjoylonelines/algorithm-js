function solution(age) {
    age += ''
    return age.split('').map(num => {
        return String.fromCharCode(97 + +num)
    }).join('')
}