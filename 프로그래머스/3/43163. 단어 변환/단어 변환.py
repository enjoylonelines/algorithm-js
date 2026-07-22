def solution(begin, target, words):
    if target not in words: return 0
    
    def to_set(s): return {(i,c) for i,c in enumerate(s)}
    
    begin_s = to_set(begin)
    target_s = to_set(target)
    ts = [to_set(s) for s in words]
    cnts = []
    
    def div(prev, arr, cnt):
        if prev == target_s: 
            cnts.append(cnt)
            return 
        if not arr: return
            
        for w in arr:
            if len(prev - w) == 1:
                next_arr = arr.copy()
                next_arr.remove(w)
                div(w, next_arr, cnt + 1)
                
    div(begin_s, ts, 0)
        
    return min(cnts) if cnts else 0