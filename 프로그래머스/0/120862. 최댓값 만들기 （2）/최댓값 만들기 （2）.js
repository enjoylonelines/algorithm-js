function solution(numbers) {
    let max = numbers[0] * numbers[1];
    
    for(let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        for(let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j];
            max = Math.max(max, num1 * num2);
        }
    }
    return max;
}