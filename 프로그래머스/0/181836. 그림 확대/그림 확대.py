def solution(picture, k):
    ans = []
    for s in picture:
        tmp = ""
        for c in s:
            tmp +=c*k
        for _ in range(k): ans.append(tmp)
    return ans