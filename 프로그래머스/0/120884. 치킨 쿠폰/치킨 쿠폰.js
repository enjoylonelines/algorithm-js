function solution(chicken) {
    let service = 0;
    let coupon = chicken;

    while (coupon >= 10) {
        const newService = Math.floor(coupon / 10);
        service += newService;
        coupon = newService + (coupon % 10);
    }

    return service;
}