def solution(num_list):
    answer = 0
    if len(num_list) > 10: return sum(num_list)
    else:
        summ = 1
        for n in num_list:
            summ *= n
        return summ