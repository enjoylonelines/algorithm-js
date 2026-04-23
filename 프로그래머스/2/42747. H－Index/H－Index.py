def solution(citations):
    citations.sort(reverse=True)
    n = len(citations)
    for i, h in enumerate(citations):
        if h < i + 1: return i
    return len(citations)