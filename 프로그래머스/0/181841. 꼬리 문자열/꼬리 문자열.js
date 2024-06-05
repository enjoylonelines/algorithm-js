function solution(str_list, ex) {
    var answer = '';
    str_list.forEach((item, idx) => {
        item.includes(ex) ? null : answer = answer.concat(item);
    });
    
    return answer;
}