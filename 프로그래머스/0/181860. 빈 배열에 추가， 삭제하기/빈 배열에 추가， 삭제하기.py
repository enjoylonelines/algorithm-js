def solution(arr, flag):
    result = []
    for i in range(len(flag)):
        if flag[i] == True:
            for _ in range(arr[i] * 2):
                result.append(arr[i])
        if flag[i] == False:
            for _ in range(arr[i]):
                result.pop()
    return result