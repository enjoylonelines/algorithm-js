def solution(arr, delete_list):
    a = []
    for n in arr:
        if n not in delete_list:
            a.append(n)
            
    return a