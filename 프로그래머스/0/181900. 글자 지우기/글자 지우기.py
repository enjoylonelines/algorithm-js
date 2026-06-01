def solution(my_string, indices):
    my_string = list(my_string)
    indices.sort()
    answer = ""
    for i,c in enumerate(my_string):
        
        if indices and indices[0] == i: 
            indices.pop(0)
            continue
        else: answer += c
    return answer