def solution(data, ext, val_ext, sort_by):
    ans = []
    dic = {
        "code": 0,
        "date": 1,
        "maximum": 2,
        "remain": 3
    }
    for i,d in enumerate(data): 
        if data[i][dic[ext]] < val_ext: ans.append(d)
    ans.sort(key=(lambda d:d[dic[sort_by]]))
    return ans