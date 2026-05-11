from itertools import product
def solution(word):
    arr = []
    moem = "AEIOU"
    for i in range(1,6):
        arr.extend("".join(p) for p in product(moem, repeat=i))
    arr.sort()
    answer = arr.index(word) + 1
    return answer

