def solution(my_string, alp):
    answer = map(lambda c: c.upper() if c == alp else c, list(my_string))
    return "".join(answer)