def solution(myString):
    myString = list(myString)
    for i in range(len(myString)):
        if myString[i] == "a": myString[i] = "A"
        elif myString[i] != "A": myString[i] = myString[i].lower()
    return "".join(myString)