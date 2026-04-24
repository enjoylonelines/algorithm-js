import collections
def solution(bridge_length, weight, truck_weights):
    wait_q = collections.deque(truck_weights)
    bridge_q = collections.deque([0] * bridge_length)
    time = 0
    current_weight = 0
    
    while wait_q or current_weight > 0:
        out_truck = bridge_q.popleft()
        current_weight -= out_truck
        
        if wait_q and current_weight + wait_q[0] <= weight:
            truck = wait_q.popleft()
            current_weight += truck
            bridge_q.append(truck)
        else: bridge_q.append(0)
        
        time += 1

    return time
