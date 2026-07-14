def solution(friends, gifts):
    friends_data = {}
    gifts_data = {}
    next_month_data = {}
    
    for gift in gifts:
        p,c = gift.split()
        if not p in friends_data:
            friends_data[p] = {}
        friends_data[p][c] = friends_data[p].get(c, 0) + 1 
    
    for p in friends:
        present = 0
        received = 0
        for c in friends:
            if p == c: continue
            present += friends_data.get(p, {}).get(c, 0)
            received += friends_data.get(c, {}).get(p, 0)
        gifts_data[p] = [present, received, present - received]
            
    for a in friends:
        cnt = 0
        for b in friends:
            if a == b: continue
            ps = friends_data.get(a, {}).get(b, 0)
            cs = friends_data.get(b, {}).get(a, 0)
            gs1 = gifts_data[a][2]
            gs2 = gifts_data[b][2]
            if ps > cs:
                cnt += 1
            elif ps == cs: # 0==0 포함
                if gs1 > gs2: cnt += 1
        next_month_data[a] = cnt
    return max(next_month_data.values())
                
            
            
    