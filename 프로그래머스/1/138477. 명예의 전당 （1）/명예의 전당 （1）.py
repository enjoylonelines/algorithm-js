def solution(k, score):
    rank = []
    ans = []
    for s in score:
        rank.append(s)
        rank.sort(reverse=True)
        if len(rank) < k: 
            ans.append(rank[-1])
        else:
            ans.append(rank[k-1])
    return ans