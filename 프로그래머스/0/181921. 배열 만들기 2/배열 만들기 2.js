function solution(l, r) {
    // 각 자리수에 따른 arr를 저장할 객체obj를 생성
    const obj = {};
    // for문을 6번 순회하면서 obj의 마지막 배열을 조회
    obj[1] = [5];
    for(let i = 1; i <= 5; i++) {
        // 이중 for문에서 2**i 번 순회하면서 번갈아 '0', '5'를 뒤에 추가
        const arr = obj[i];
        const tmp = [];
        for(let j = 0; j < 2**(i-1); j++) {
            tmp.push(+(arr[j] + '0'));
            tmp.push(+(arr[j] + '5'));
        }
         // tmp를 obj에 i: tmp로 추가
        obj[i+1] = tmp;
    }
    // l,r 길이로 left, right 상수 생성
    const left = (''+l).length;
    const right = (''+r).length;
    // obj의 키값으로 순회
    const arr = [];
    for(let key of Object.keys(obj)) {
        if(key >= left && key <= right) {
            for(let val of obj[key]) {
                if( val >= l && val <= r) arr.push(val)
            }
        }
    }
    if(arr.length === 0) return [-1]
    return arr;
    // 키값이 l,r 사이인 경우에 배열값 출력
    
    
}