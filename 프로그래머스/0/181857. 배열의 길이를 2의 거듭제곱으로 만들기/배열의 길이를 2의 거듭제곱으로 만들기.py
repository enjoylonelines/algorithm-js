def solution(arr):
    cnt = 0
    ln = len(arr)
    while True:
        print(2**cnt, ln)
        if 2 ** cnt == ln: return arr
        if 2 ** cnt > ln: break
        cnt += 1
    arr.extend([0] * (2**cnt - ln))
    return arr
    