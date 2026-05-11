from itertools import permutations
arr = []
def solution(k, dungeons):
    for p in permutations(dungeons, len(dungeons)):
        cnt = 0
        cur_hp = k
        for idx,cors in enumerate(p):
            req,div = cors
            if req <= cur_hp:
                cur_hp -= div
                cnt += 1
            arr.append(cnt)
    return max(arr)