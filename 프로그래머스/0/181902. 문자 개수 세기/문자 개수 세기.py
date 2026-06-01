def solution(my_string):
    ans = [0] * 52
    for c in my_string:
        if ord(c) >= ord("A") and ord(c) <= ord("Z"):
            ans[ord(c) - ord("A")] += 1
        else:
            ans[ord(c) - ord("a") + 26] += 1
    return ans