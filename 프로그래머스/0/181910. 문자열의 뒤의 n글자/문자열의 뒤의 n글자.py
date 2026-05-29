def solution(my_string, n):
    answer = ''
    l = len(my_string)
    answer += my_string[l-n: l]
    
    return answer