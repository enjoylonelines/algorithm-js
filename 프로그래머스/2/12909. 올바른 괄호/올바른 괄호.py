def solution(s):
    answer = False
    stack = []
    for char in s:
        if char == "(": stack.append(1);
        else:
            if stack: stack.pop()
            else: return False
        if stack: answer = False
        else: answer = True
    return answer