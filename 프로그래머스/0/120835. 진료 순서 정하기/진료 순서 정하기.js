function solution(emergency) {
    let copy = [...emergency].sort((a,b) => b - a)
    return emergency.map((item) => {
        for(let i = 0; i < copy.length; i++) {
            if(copy[i] === item) return i + 1
        }
    })
}