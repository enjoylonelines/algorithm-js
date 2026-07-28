def solution(tickets):
    ans = ["ICN"]
    used = [False] * len(tickets)
    tickets.sort()
    
    def dfs(cur, cnt):
        if cnt == len(tickets): return ans[:]
        
        for i,(a,b) in enumerate(tickets):
            if not used[i] and cur == a:
                ans.append(b)
                used[i] = True
                found = dfs(b, cnt + 1)
                if found: return found
                ans.pop()
                used[i] = False
            
    return dfs("ICN", 0)