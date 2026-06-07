def solution(a, b, c, d):
    dic = {}
    arr = [a,b,c,d]
    for i in arr:
        dic[i] = dic.get(i,0) + 1
    l = len(dic)
    
    result = sorted(dic.items(), key=lambda x: x[1], reverse=True)
    values = sorted(list(set([v for k,v in result])), reverse=True)
    keys = [k for k, v in result]
    print(result, l, values)
    if l == 1: return 1111 * keys[0]
    if l == 4: return min(keys)
    if l == 2: 
        if len(values) == 1: return (keys[0] + keys[1]) * abs(keys[0] - keys[1])
        else: return (keys[0] * 10 + keys[1])**2
    if l == 3: return keys[1] * keys[2]
        
        
    