function solution(my_string) {
    return my_string.split('').map(char => {
        
        if(char >= 'A' && char <= 'Z') char = char.toLowerCase()
        else char = char.toUpperCase()
        
        return char
    }).join('')
    
    
}