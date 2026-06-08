def solution(arr):
    i = 0
    stk = []
    while i < len(arr):
        if not stk: stk.append(arr[i])
        elif stk and stk[-1] == arr[i]: stk.pop()
        elif stk and stk[-1] != arr[i]: stk.append(arr[i])
        else: continue
        i += 1
    return stk if stk else [-1]