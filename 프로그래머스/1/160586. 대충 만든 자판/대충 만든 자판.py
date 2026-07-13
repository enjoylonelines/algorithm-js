def solution(keymap, targets):
    answer = []
    
    for t in targets: # t = "ABCD"
        cnt = 0
        for c in t: # c = "A"
            exist = False
            idx = 101
            for k in keymap: # k = "ABACD"
                tmp = 101
                if c in k: 
                    exist = True
                    tmp = k.index(c)
                idx = min(idx, tmp)
            if not exist: 
                cnt = -1
                break
            else: cnt += idx + 1
        answer.append(cnt)
    return answer