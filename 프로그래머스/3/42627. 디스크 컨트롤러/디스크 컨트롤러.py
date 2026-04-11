import heapq

def solution(jobs):
    jobs.sort(key=lambda x: x[0])  # 시작시간 기준 정렬
    heap = []
    time = 0
    job_idx = 0
    arr = []

    while job_idx < len(jobs) or heap:
        # 현재 시간에 요청된 작업 힙에 추가
        while job_idx < len(jobs) and jobs[job_idx][0] <= time:
            s, l = jobs[job_idx]
            heapq.heappush(heap, (l, s))
            job_idx += 1

        if heap:
            l, s = heapq.heappop(heap)
            time += l
            arr.append(time - s)
        else:
            # 처리할 작업 없으면 다음 작업 시작시간으로 점프
            time = jobs[job_idx][0]

    return sum(arr) // len(arr)