from itertools import permutations
arr = []
def solution(k, dungeons):
    for p in permutations(dungeons, len(dungeons)):
        cnt = 0
        fatigue = k
        for idx,cors in enumerate(p):
            req,div = cors
            cnt += 1
            if idx == len(p) - 1:
                if fatigue < req: cnt -= 1
                arr.append(cnt)
                break;
            elif fatigue >= req: 
                fatigue -= div
            else:
                cnt -= 1
                arr.append(cnt)
                break
    return max(arr)