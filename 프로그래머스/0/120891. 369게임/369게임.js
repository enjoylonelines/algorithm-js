function solution(order) {
    return order.toString().split('').filter(num => {
        if(num === '3' || num === '6' || num === '9') return num;
    }).length
}