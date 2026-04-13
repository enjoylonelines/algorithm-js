def solution(arr):
    ans = [arr[0]]
    idx = 0
    for num in arr:
       if num != ans[idx]:
        ans.append(num)
        idx += 1
    return ans