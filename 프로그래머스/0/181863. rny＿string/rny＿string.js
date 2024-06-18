function solution(rny_string) {
    return [...rny_string].map(item => {
        if(item === 'm') return 'rn';
        else return item;
    }).join('');
    
}