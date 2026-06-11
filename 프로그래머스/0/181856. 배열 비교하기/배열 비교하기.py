def solution(arr1, arr2):
    len1 = len(arr1)
    len2 = len(arr2)
    sum1 = sum(arr1)
    sum2 = sum(arr2)
    if len1 == len2: 
        if sum1 == sum2: return 0
        if sum1 > sum2: return 1
        return -1
    if len1 > len2: return 1
    return -1