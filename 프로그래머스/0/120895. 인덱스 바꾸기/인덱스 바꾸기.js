function solution(my_string, num1, num2) {
    let tmp = ''
    return my_string.split('').map((char, idx) => {
        if(idx === num1) {
            tmp = char
            return my_string[num2]
        }
        if(idx === num2) return tmp 
        return char
    }).join('')
}