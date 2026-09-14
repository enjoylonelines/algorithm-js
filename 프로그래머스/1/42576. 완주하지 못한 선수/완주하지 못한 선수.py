def solution(p, c):
    dic = {}
    for name in p:
        if dic.get(name): dic[name] += 1
        else: dic[name] = 1
    for name in c:
        dic[name] -= 1
    for key in dic:
        if dic[key]: return key
    