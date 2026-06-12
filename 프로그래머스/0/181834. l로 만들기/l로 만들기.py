def solution(myString):
    arr = list(myString)
    for i in range(len(arr)):
        if ord("l") > ord(arr[i]): arr[i] = "l"
    return "".join(arr)