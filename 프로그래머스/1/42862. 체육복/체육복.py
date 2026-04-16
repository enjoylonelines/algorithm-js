def solution(n, lost, reserve):
    answer = 0
    overlap = set(lost) & set(reserve)
    lost = [x for x in lost if x not in overlap]
    reserve = [x for x in reserve if x not in overlap]
    lost.sort()
    reserve.sort()
    for r in reserve:
        if r-1 in lost:
            lost.pop(lost.index(r-1))
        elif r+1 in lost:
            lost.pop(lost.index(r+1))
    return n - len(lost)