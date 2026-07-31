def solution(s):
    s = list(map(int,s.split()))
    print(s)
    return f"{min(s)} {max(s)}"