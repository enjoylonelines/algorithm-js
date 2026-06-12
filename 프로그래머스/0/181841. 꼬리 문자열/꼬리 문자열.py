def solution(str_list, ex):
    ans = ""
    for s in str_list:
        if not ex in s:
            ans += s
    return ans