def solution(babbling):
    words = ["aya", "ye", "woo", "ma"]
    cnt = 0
    # i는 b 크기만큼
    # 앞에서부터 순서대로 words중 포함되는 w가 있는지 확인
    # 
    for b in babbling:
        i = 0
        prev = ''
        ok = True
        while i < len(b):
            matched = False
            for w in words: # "ayaayaa"
                if b[i:i+len(w)] == w and prev != w: # "aya", prev: "aya"
                    i = i + len(w)
                    matched = True
                    prev = w
                    break
            if not matched: 
                ok = False
                break
        if ok: cnt += 1
    return cnt