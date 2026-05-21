def solution(a, b):
    n1 = 2 * a * b
    a = str(a)
    b = str(b)
    n2 = int("".join([a,b]))
    return max(n1,n2)