function solution(numbers) {
    const numArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];

    numArr.forEach((word, idx) => {
        numbers = numbers.replaceAll(word, idx);
    });

    return Number(numbers);
}