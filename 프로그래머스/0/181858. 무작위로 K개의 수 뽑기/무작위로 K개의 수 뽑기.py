def solution(arr, k):
    arr = list(dict.fromkeys(arr))

    if len(arr) > k:
        arr = arr[:k]
    else:
        arr += [-1] * (k - len(arr))

    return arr