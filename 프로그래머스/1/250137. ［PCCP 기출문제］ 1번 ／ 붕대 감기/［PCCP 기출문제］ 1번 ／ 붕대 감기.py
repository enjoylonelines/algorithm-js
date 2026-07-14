from collections import deque

def solution(bandage, health, attacks):
    q = deque()
    for i in attacks: q.append(i)
    t, x, y = bandage
    cur = 0
    cur_health = health
    seq = 0
    while q:
        attack_time, damage = q.popleft()
        if cur == attack_time:
            cur_health -= damage
            seq = 0
            if cur_health < 0: return -1
        else:
            q.appendleft([attack_time, damage])
            cur_health += x
            seq += 1
            if seq == t: 
                cur_health += y
                seq = 0
            if cur_health > health: 
                cur_health = health
                seq = 0
        cur += 1
        print(seq, cur_health)
    return cur_health if cur_health else -1
        