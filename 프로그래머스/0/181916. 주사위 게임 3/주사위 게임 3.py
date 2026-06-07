from collections import Counter

def solution(a, b, c, d):
    counter = Counter([a, b, c, d])
    items = sorted(counter.items(), key=lambda x: x[1], reverse=True)

    if len(counter) == 1:
        p = items[0][0]
        return 1111 * p

    if len(counter) == 4:
        return min(a, b, c, d)

    if len(counter) == 3:
        q = items[1][0]
        r = items[2][0]
        return q * r

    p, c1 = items[0]
    q, c2 = items[1]

    if c1 == 3:
        return (10 * p + q) ** 2
    else:
        return (p + q) * abs(p - q)