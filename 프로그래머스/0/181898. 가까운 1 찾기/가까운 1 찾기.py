def solution(arr, idx):
    arr = arr[idx:]
    for i,n in enumerate(arr):
        if n == 1:
            return i + idx
    return -1