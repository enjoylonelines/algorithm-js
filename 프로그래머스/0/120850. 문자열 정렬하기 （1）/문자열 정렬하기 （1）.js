function solution(my_string) {
    let ans = []
    my_string.split('').forEach((char) => {
        if(!isNaN(char)) ans.push(+char);
    })
    return ans.sort((a,b) => a - b)
}