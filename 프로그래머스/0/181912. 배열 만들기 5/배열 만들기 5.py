def solution(intStrs, k, s, l):
    answer = []
    for num in intStrs:
        num = num[s:s+l]
        num = int(num)
        if num > k: answer.append(num)
    return answer