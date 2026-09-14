def solution(array, commands):
    ans = []
    for i,j,k in commands:
        arr = sorted(array[i-1:j])
        ans.append(arr[k-1])
    return ans