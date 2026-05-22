def solution(code):
    ans = ''
    mode = 0
    for i,c in enumerate(code):
        if mode == 0:
            if c == "1": mode = 1
            elif i%2 == 0: ans += c 
        else:
            if c == "1": mode = 0
            elif i%2 == 1: ans += c
    return ans if len(ans) != 0 else "EMPTY"