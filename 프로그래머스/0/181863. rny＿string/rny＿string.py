def solution(rny_string):
    return "".join("rn" if c == "m" else c for c in rny_string)