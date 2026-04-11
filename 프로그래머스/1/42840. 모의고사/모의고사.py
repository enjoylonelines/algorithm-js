def solution(answers):
    arr = []
    answer = []
    patterns = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    for pattern in patterns:
        idx = 0
        cnt = 0
        for num in answers:
            idx = idx % len(pattern) 
            if num == pattern[idx]: cnt += 1
            idx += 1
        arr.append(cnt)
    
    max_num = max(arr)
    for i, score in enumerate(arr): 
        if max_num == score: 
            answer.append(i + 1)
    return answer
