import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
   
    while scoville[0] < K:
        if len(scoville) < 2: return -1
        food1 = heapq.heappop(scoville)
        food2 = heapq.heappop(scoville)
        newFood = food1 + (food2 * 2)
        heapq.heappush(scoville, newFood)
        answer += 1
    return answer
