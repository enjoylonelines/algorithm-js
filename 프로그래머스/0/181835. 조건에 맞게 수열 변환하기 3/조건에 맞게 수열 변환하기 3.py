def solution(arr, k):
    if k % 2 == 0: 
        for i in range(len(arr)): arr[i] += k 
    if k % 2 == 1: 
        for i in range(len(arr)): arr[i] *= k 
    return arr