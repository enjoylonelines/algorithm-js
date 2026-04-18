def solution(progresses, speeds):
    answer = []
    while progresses:
        cnt = 0
        for idx in range(len(progresses)):
            progresses[idx] += speeds[idx]
        while progresses and progresses[0] >= 100:
            progresses.pop(0)
            speeds.pop(0)
            cnt += 1
        if cnt > 0: answer.append(cnt)
    return answer