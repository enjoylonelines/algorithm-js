function solution(binomial) {
    const arr = binomial.split(' ');
    const [a, op, b] = arr;
    switch(op) {
        case('+'):
            return +a + +b
        case('-'):
            return a - b
        case("*"):
            return a * b
    }
}