#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#define x first 
#define y second 
using namespace std;
int dist[102][102];
queue<pair<int, int>> q;
string board[102];
int n, m;

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int ox[4] = { 1, 0, -1, 0 };
    int oy[4] = { 0, 1, 0 ,-1 };
    cin >> n >> m;
    for (int i = 0; i < n; i++) cin >> board[i];
    for (int i = 0; i < n; i++) fill(dist[i], dist[i] + m, -1);
    q.push({ 0,0 });
    dist[0][0] = 0;
    while (!q.empty()) {
          pair<int, int> tmp = q.front(); q.pop();
          for (int i = 0; i < 4; i++) {
               int nx = tmp.x + ox[i];
               int ny = tmp.y + oy[i];
               if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
               if (dist[nx][ny] >= 0|| board[nx][ny] != '1') continue;
               q.push(make_pair(nx, ny));
               dist[nx][ny] = dist[tmp.x][tmp.y] + 1;
                }
    }
    cout << dist[n - 1][m - 1] + 1;
    return 0;
}