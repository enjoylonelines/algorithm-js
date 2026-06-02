def solution(arr):
    prev = []
    x = 0
    
    while True:
        flag = 0    
        prev = arr.copy()
        for i in range(len(arr)):
            if arr[i] >= 50 and arr[i] % 2 == 0:
                arr[i] //= 2
            elif arr[i] < 50 and arr[i] % 2 == 1:
                arr[i] = arr[i] * 2 + 1
            if arr[i] != prev[i]: flag = 1
        if not flag and (prev == arr): return x
        x += 1
        