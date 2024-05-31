function solution(num_list) {
    const lastValue = num_list[num_list.length-1];
    const prevValue = num_list[num_list.length-2];
    if(lastValue > prevValue) num_list.push(lastValue - prevValue);
    else num_list.push(lastValue * 2);
    return num_list;
}