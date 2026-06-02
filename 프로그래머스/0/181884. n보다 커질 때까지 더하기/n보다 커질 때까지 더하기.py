def solution(numbers, n):
    summ = 0
    for num in numbers:
        summ += num
        if summ > n: return summ