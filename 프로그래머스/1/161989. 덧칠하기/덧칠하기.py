def solution(n, m, section):
    cnt = 0
    en = 0
    for s in section:
        if s > en:
            en = m + s - 1
            cnt += 1
    return cnt