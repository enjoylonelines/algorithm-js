def solution(number, limit, power):
    summ = 0
    for n in range(1, number + 1):
        cnt = 0
        i = 1
        while i**2 <= n:
            if n % i == 0:
                if i**2 == n: cnt += 1
                else: cnt += 2
            i += 1
        if cnt > limit: cnt = power
        summ += cnt
    return summ