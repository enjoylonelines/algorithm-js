def solution(l, r):
    answer = []
    for n in range(l,r+1):
        n = str(n)
        cnt = 0
        for c in n:
            if not (c == "5" or c == "0"): continue
            cnt += 1
        if cnt == len(n): answer.append(int(n))
    return answer if answer else [-1]