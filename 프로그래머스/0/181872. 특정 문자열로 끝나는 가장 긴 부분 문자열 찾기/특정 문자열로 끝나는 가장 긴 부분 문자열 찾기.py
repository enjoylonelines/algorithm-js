def solution(s, pat):
    en = 0
    for i in range(len(s)):
        flag = 0
        if s[i] == pat[0]:
            if len(s) < len(pat) + i : break
            for j in range(len(pat)):    
                if s[i + j] != pat[j]: 
                    flag = 1
                    break
            if flag == 0: en = len(pat) + i
            print(en)
    return s[:en]