def solution(sizes):
    row = 0
    col = 0
    for size in sizes:
        size.sort()
        [w, h] = size
        row = max(row, w)
        col = max(col, h)
    answer = row * col
    
    return answer