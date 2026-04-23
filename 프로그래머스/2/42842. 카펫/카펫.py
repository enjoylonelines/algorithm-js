def solution(brown, yellow):
    size = brown + yellow
    for h in range(3,  int(size**(1/2)) + 1):
        if not size % h == 0: continue
        w = size // h
        if w < h: continue
        if (w - 2)*(h - 2) == yellow: return [w, h]

