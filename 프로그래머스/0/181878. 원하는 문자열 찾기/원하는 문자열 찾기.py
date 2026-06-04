def solution(myString, pat):
    myString = myString.lower()
    pat = pat.lower()
    return 1 if len(myString.split(pat)) != 1 else 0