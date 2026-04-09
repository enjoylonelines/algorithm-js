def solution(answers):
    answer = [0,0,0]
    patterns = [[1,2,3,4,5],[2,1,2,3,2,4,2,5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    for idx,num in enumerate(answers):
        for i in range(0, 3):
            p_idx = (idx % len(patterns[i]))
            if patterns[i][p_idx] == num:
                answer[i] += 1
    answer = [i + 1 for i,x in enumerate(answer) if x == max(answer)]
    return answer
