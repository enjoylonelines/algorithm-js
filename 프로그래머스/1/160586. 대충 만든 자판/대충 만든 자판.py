def solution(keymap, targets):
    answer = []
    min_cnt = {}
    for t in targets: # t = "ABCD"
        cnt = 0
        for c in t: # c = "A"
            exist = False
            idx = 101
            for key in keymap: # k = "ABACD"
                for i,k in enumerate(key): 
                    if k == c:
                        min_cnt[c] = min(min_cnt.get(c, 101), i + 1)
                        exist = True
            if not exist: 
                cnt = -1
                break
            else: cnt += min_cnt[c]
        answer.append(cnt)
    return answer