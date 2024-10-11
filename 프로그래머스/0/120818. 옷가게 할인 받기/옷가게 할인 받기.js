function solution(price) {
    switch(true) {
        case(price >= 500000):
            price = price *0.80;
            break;
        case(price >= 300000):
            price = price * 0.90;
            break;
        case(price >= 100000):
            price = price * 0.95;
            break;
        default:
            price = price
    }
    return Math.trunc(price)
}

