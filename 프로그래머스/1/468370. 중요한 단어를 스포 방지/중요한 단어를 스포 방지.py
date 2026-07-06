def solution(m, sps):
    words = set(m.split())
    spolior_words = []
    st = ""
    m = list(m)

    for s, e in sps:
        while s > 0 and m[s] != " ":
            s -= 1
        while e < len(m) - 1 and m[e] != " ":
            e += 1
        spolior_words.extend(''.join(m[s:e+1]).split())
        for i in range(s, e + 1): m[i] = " "

    words = ''.join(m).split()
    w = set(words)
    s = set(spolior_words)
    print(w, s)
    for important in s.copy():
        if important in w: s.remove(important)
    print(s)
    return len(s)