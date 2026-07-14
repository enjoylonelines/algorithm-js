def solution(wallpaper):
    xs = []
    ys = []
    for i,s in enumerate(wallpaper):
        for j,c in enumerate(s):
            if c == "#":
                xs.append(i)
                ys.append(j)
    return [min(xs),min(ys),max(xs) + 1,max(ys) + 1]
    