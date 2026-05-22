def solution(ineq, eq, n, m):
    if n >= m:
        if n == m: return 1
        if ineq == ">": return 1
        else: return 0
    else: 
        if ineq == "<": return 1
        else: return 0