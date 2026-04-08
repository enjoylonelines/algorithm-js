def solution(sizes):
    widths = []
    heights = []
    for size in sizes:
        size.sort()
        [w, h] = size
        widths.append(w)
        heights.append(h)
    max_w = max(widths)
    max_h = max(heights)
    answer = max_w * max_h
    
    return answer