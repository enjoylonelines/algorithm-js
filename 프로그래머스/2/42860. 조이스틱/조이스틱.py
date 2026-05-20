def solution(name):
    ans = 0
    n = len(name)
    move = n - 1
    for c in name: ans += find_order(c)
    for i in range(n):
        next_i = i + 1
        while next_i < n and name[next_i] == "A": next_i += 1
        move = min(move, 2*i + (n - next_i), i + 2 * (n - next_i))
    return move + ans
def find_order(c):
    return min(ord(c) - ord("A"), ord("Z")-ord(c) + 1)