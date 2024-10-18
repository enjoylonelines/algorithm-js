function solution(my_string) {
    const arr = ['a','e','i','o','u'];
    return my_string.split('').map(char => {
        let flag = 0;
        for(let moum of arr) {
            if(char === moum) return '';
        }
        return char;
    }).join('')
    
}