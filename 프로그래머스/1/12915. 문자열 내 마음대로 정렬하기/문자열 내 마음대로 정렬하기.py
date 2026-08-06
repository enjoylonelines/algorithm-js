def solution(strings, n):
    strings = [s[n] + s for s in strings]
    strings.sort()
    return [s[1:] for s in strings]