from collections import Counter
def solution(strArr):
    arr = [len(s) for s in strArr]
    c = Counter(arr)
    return max(c.values())