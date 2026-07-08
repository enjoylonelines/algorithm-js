def solution(signals):
    t = 1
    while True:
        flag = 0
        exit = 0
        for g,y,r in signals:
            range_y = t % (g + y + r)
            if g <= range_y < g + y: flag += 1
            if range_y == 0: exit += 1
        if flag == len(signals): return t + 1
        if exit == len(signals) and flag != len(signals): return -1
        t += 1
        