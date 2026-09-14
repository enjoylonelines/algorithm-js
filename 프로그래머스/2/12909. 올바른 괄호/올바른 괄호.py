def solution(s):
    st = []
    for c in s:
        if not st or c == "(":
            st.append(c)
        else: st.pop()
    return True if not st else False