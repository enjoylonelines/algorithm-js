def solution(rank, attendance):
    rank = [(i, rank[i]) for i in range(len(rank)) if attendance[i]]
    rank = sorted(rank, key=lambda x: x[1])[:3]
    arr = []
    for x,y in rank:
        arr.append(x)
    a,b,c = arr
    return 10000 * a + 100 * b + c