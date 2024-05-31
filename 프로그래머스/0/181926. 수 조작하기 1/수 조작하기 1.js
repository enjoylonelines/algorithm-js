function solution(n, control) {
    for(let i = 0; i < control.length; i++) {
        const item = control[i];
        if(item === "w") n += 1;
        else if(item === "s") n -= 1;
        else if(item === "d") n += 10;
        else if(item === "a") n -= 10;

    }
    return n;
}