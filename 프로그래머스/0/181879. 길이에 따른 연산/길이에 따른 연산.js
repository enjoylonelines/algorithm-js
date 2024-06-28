function solution(num_list) {
    const len = num_list.length;
    return len >= 11 ? num_list.reduce((acc, cur) => acc + cur, 0) : num_list.reduce((acc, cur) => acc * cur,1)
}