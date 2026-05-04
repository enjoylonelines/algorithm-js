def solution(people, limit):
    people.sort()
    lo, hi = 0, len(people) - 1
    cnt = 0
    while lo <= hi:
        if people[lo] + people[hi] <= limit:
            lo += 1
        hi -= 1
        cnt += 1
    return cnt