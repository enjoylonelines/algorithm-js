def solution(players, callings):
    rank = {p : i for i,p in enumerate(players)}
    def swap(idx):
        tmp = players[idx] 
        players[idx] = players[idx-1] 
        players[idx-1] = tmp
    for c in callings:
        idx = rank[c]
        if idx == 0: continue
        prev = players[idx-1]
        swap(idx)
        rank[prev] += 1
        rank[c] -= 1
    return players