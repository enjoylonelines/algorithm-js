def solution(name, yearning, photo):
    score = {name[i] : yearning[i] for i in range(len(name))}
    ans = []
    for p in photo:
        summ = 0
        for name in p:
            num = score.get(name, 0)
            summ += num
        ans.append(summ)
    return ans