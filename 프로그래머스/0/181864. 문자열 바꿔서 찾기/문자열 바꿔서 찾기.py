def solution(myString, pat):
    s = "".join("B" if c == "A" else "A" for c in myString)
    for i in range(len(s) - len(pat) + 1):
        if s[i:i+len(pat)] == pat: return 1
    return 0