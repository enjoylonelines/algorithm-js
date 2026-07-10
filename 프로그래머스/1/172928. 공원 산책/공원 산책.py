def solution(park, routes):
    start_idx = []
    found = False
    for i in range(len(park)):
        for j in range(len(park[0])):
            if park[i][j] == "S": 
                start_idx = [i, j]
                found = True
                break
        if found: break
    for order in routes:
        op, step = order.split()
        step = int(step)
        x,y = start_idx
        found = False
        if op == "W":
            if 0 > y - step: continue
            for i in range(y - 1, y-step - 1, -1):
                if park[x][i] == "X": 
                    found = True
                    break
            if not found: start_idx = [x, y - step]
        if op == "E":
            if len(park[0]) <= y + step: continue
            for i in range(y + 1, y + step + 1):
                if park[x][i] == "X":
                    found = True
                    break
            if not found: start_idx = [x, y + step]
        if op == "N":
            if 0 > x - step: continue
            for i in range(x - 1, x - step - 1, -1):
                if park[i][y] == "X": 
                    found = True
                    break
            if not found: start_idx = [x - step, y]
        if op == "S":
            if len(park) <= x + step: continue
            for i in range(x + 1, x + step + 1):
                if park[i][y] == "X": 
                    found = True
                    break
            if not found: start_idx = [x + step, y]
                
    return start_idx
        
    