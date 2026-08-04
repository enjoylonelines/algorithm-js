def solution(s):
    s = list(s)
    print(s)
    for i in range(len(s)):
        if i == 0: s[i] = s[i].upper()
        else:
            if s[i-1] == ' ': s[i] = s[i].upper()
            else: s[i] = s[i].lower()
            
    return "".join(s)
            