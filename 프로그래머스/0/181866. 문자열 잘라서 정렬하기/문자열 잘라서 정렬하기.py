def solution(myString):
    myString = myString.split("x")
    myString = [s for s in myString if s]
    return sorted(myString)