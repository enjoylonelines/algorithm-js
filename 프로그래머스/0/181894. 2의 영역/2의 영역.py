def solution(arr):
    answer = []
    st = -1
    en = -1
    for i in range(len(arr)):
        if arr[i] == 2:
            st = i
            break
    if st == -1: return [-1]
    for i in range(len(arr)-1,st - 1, -1):
        if arr[i] == 2:
            en = i
            break
    print(en)
    return arr[st:en+1]