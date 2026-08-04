def solution(A,B):
    A.sort()
    B.sort(reverse=True)
    summ = 0
    for a,b in zip(A,B):
        summ += a * b
    return summ