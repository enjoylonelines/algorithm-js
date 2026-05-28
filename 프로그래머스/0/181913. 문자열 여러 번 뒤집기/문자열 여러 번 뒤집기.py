def solution(st, queries):
    st = list(st)
    for s,e in queries:
        st[s:e+1] = st[s:e+1] [::-1]
    return "".join(st)