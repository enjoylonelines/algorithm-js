def solution(n, w, num):
    i = 0
    row = n // w
    if n % w != 0:
        row += 1

    arr = [[0] * w for _ in range(row)]

    for j in range(1, n + 1):
        if (j - 1) % w == 0 and j != 1:
            i += 1
        arr[i][(j - 1) % w] = j
    
    for i in range(len(arr)):
        if i % 2 == 1: 
            arr[i].reverse()
    cnt = 0
    for i in range(len(arr)):
        if num in arr[i]: 
            cnt += len(arr) - i
            print(len(arr), i)
            idx = arr[i].index(num)
    if arr[len(arr) - 1][idx] == 0: cnt -= 1
    return cnt