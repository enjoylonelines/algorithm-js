def solution(a, b):
    a= str(a)
    b= str(b)
    n1 = int("".join([a,b]))
    n2 = int("".join([b,a]))
    return max(n1,n2)