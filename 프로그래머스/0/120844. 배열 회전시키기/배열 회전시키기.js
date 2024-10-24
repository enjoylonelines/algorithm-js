function solution(numbers, direction) {
    if(direction === 'left') {
        let num = numbers.shift()
        numbers.push(num)
    } else {
        let num = numbers.pop()
        numbers.unshift(num)
    }
    return numbers;
}