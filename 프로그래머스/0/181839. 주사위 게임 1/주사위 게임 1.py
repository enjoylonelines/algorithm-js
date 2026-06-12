def solution(a, b):
    aa = 0 if a % 2 == 0 else 1
    bb = 0 if b % 2 == 0 else 1
    result = aa + bb
    if result == 2: return a**2 + b**2
    if result == 1: return 2 * (a+b)
    if result == 0: return abs(a-b)