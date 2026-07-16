def solution(t, p):
    p_len = len(p)
    t_len = len(t)
    p = int(p)
    cnt = 0
    for i in range(t_len):
        if i + p_len > t_len: return cnt
        num = t[i:i + p_len]
        num = int(num)
        print(num)
        if p >= num: cnt += 1
    return cnt