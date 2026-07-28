def solution(food):
    arr = []
    for i in range(1,len(food)):
        for j in range(food[i]//2):
            arr.append(i)
    r_arr = arr.copy()
    arr.append(0)
    r_arr.reverse()
    arr.extend(r_arr)
    return "".join(map(str, arr))
    
    
    