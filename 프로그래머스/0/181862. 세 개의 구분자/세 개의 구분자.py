def solution(my_str):
    my_str = list(my_str)
    for i,c in enumerate(my_str):
        if c == "a" or c == "b" or c == "c":
            my_str[i] = " "
    my_str = "".join(my_str).split(" ")
    my_str = [str for str in my_str if str]
    if(len(my_str)): return my_str
    return ["EMPTY"]