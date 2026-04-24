import collections
def solution(maps):
    n = len(maps)
    m = len(maps[0])
    dist = [[0] * m for _ in range(n)]
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    q = collections.deque()
    q.append((0,0))
    dist[0][0] = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx >= n or nx < 0 or ny >= m or ny < 0: continue
            if maps[nx][ny] == 0: continue
            if dist[nx][ny] != 0: continue
            q.append((nx,ny))
            dist[nx][ny] = dist[x][y] + 1    
                
    answer = dist[n - 1][m - 1]
    if answer == 0: return -1
    else: return answer