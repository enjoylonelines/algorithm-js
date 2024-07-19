function solution(num_list) {
    const acc = [0,0];
    
    num_list.forEach((cur, idx) => { 
        if(idx %2 === 0) return acc[0] += cur;
        else if(idx %2 === 1) return acc[1] += cur;
    }, []);
    return acc[0] > acc[1] ? acc[0] : acc[1];
}