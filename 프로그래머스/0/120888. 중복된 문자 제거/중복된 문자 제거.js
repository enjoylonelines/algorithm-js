function solution(my_string) {
    let arr = {}
    let str = ''
    my_string.split('').forEach(char => {
        if(!arr[char]) {
            str += char
            arr[char] = 1;
        }
        else return;
    })
    return str
}



