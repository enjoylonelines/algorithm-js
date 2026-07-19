def solution(s):
    same = 0
    ans = 0
    x = 0
    lens = len(s)
    for i,c in enumerate(s):
        if same == 0:
            x = i
            ans += 1
        if s[x] == c: 
            same += 1
        else:
            same -= 1
        
    return ans