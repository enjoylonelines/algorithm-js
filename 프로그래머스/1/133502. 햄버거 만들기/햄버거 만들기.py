def solution(ingredient):
    burger = [1,2,3,1]
    stack = []
    cnt = 0
    for item in ingredient:
        stack.append(item)
        if stack[-4:] == burger:
            del stack[-4:]
            cnt += 1
    return cnt
    