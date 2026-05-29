def solution(my_strings, parts):
    answer = ''
    for i,p in enumerate(parts):
        s,e = p
        answer += my_strings[i][s:e+1]
    return answer