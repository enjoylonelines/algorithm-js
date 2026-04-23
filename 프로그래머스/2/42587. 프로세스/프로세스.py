def solution(priorities, location):
    for i,priority in enumerate(priorities): priorities[i] = (i,priority)
    cnt = 0
    while priorities:
        tmp = priorities.pop(0)
        if not priorities or tmp[1] >= max(row[1] for row in priorities): 
            cnt += 1
            if tmp[0] == location: return cnt
        else: priorities.append(tmp)
    return