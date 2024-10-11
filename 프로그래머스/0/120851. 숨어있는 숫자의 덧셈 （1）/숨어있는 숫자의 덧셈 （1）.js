function solution(my_string) {
    return my_string.split('').map(word => +word).filter(word => word).reduce((acc,cur) => acc += cur,0)
}