def solution(s, skip, index):
    s = [ord(c) for c in s]
    skip = {ord(c): True for c in skip}
    for i, c in enumerate(s):
        cnt = 0
        while cnt < index:
            c += 1
            if c > ord("z"): c = ord("a")
            if skip.get(c, False): continue
            cnt += 1
        s[i] = c
    s = [chr(o) for o in s]
    return "".join(s)