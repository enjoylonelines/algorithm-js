def solution(signals):
    G = []
    Y = []
    R = []

    for g, y, r in signals:
        G.append(g)
        Y.append(y)
        R.append(r)
    t = 1
    while True:
        flag = 0
        exit = 0
        for i in range(len(signals)):
            range_y = t % (G[i] + Y[i] + R[i])
            if G[i] <= range_y < G[i] + Y[i]: flag += 1
            if range_y == 0: exit += 1
        if flag == len(signals): return t + 1
        if exit == len(signals) and flag != len(signals): return -1
        t += 1
        