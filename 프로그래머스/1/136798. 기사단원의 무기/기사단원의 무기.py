def solution(number, limit, power):
    div = [0] * (number + 1)
    for i in range(1, number + 1):
        for j in range(i, number + 1, i):
            div[j] += 1
    summ = 0
    for i in range(1, number + 1):
        if div[i] > limit:
            summ += power
        else:
            summ += div[i]
    
    return summ