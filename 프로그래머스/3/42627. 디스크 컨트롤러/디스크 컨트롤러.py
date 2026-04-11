import heapq
def solution(jobs):
    heap = []
    job_idx = 0
    current_time = 0
    turn_times = []

    jobs.sort(key = lambda x: x[0])
    while job_idx < len(jobs) or heap:
        # 현재 시간에 요청된 작업을 힙에 push
        while job_idx < len(jobs) and jobs[job_idx][0] <= current_time:
            s, l = jobs[job_idx]
            heapq.heappush(heap, (l, s))
            job_idx += 1
        # 현재 시간 기준 작업 처리
        if heap:
            l, s = heapq.heappop(heap)
            current_time += l
            turn_times.append(current_time - s)
        # !처리할 작업이 없으면 다음 요청 시점으로 점프
        else:
            current_time = jobs[job_idx][0]
            
    return sum(turn_times)//len(turn_times)
