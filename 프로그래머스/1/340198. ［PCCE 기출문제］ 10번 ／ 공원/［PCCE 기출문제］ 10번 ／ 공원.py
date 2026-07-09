def solution(mats, park):
    row_len = len(park)
    col_len = len(park[0])
    mats.sort(reverse=True)
    ans = []

    for i in range(row_len):
        for j in range(col_len):
            if park[i][j] != "-1":
                continue
            for m in mats:
                if j + m > col_len or i + m > row_len:
                    continue
                if all(park[x][y] == "-1" for x in range(i, i + m) for y in range(j, j + m)):
                    ans.append(m)

    return max(ans) if ans else -1