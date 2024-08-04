function solution(numLog) {
    const arr = [];
    for(let i = 1; i < numLog.length; i++) {
        switch(numLog[i] - numLog[i - 1]) {
            case(1):
                arr.push('w')
                break;
            case(-1):
                arr.push('s')
                break;
            case(10):
                arr.push('d')
                break;
            case(-10):
                arr.push('a')
                break;
        }
    }
    return arr.join('')
}