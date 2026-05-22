def solution(a, d, included):
    sum = 0
    for i,b in enumerate(included):
        if b == True:
            s = a + d * i
            sum += s
    return sum