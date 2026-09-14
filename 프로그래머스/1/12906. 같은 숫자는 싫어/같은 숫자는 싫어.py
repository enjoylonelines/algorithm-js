def solution(arr):
    st = []
    for n in arr:
        if not st or st[-1] != n:
            st.append(n)
    return st