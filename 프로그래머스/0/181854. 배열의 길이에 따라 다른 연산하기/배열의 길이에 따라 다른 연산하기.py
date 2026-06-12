def solution(arr, n):
    ln = len(arr)
    if ln % 2 == 0:
        for i in range(1,ln,2): arr[i] += n
    else:
        for i in range(0,ln,2): arr[i] += n
    return arr