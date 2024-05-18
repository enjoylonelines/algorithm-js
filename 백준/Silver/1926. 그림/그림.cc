#include <bits/stdc++.h>
using namespace std;
#define X first
#define Y second
int cnt = 0;
int area[250005] = {
    0,
};
int board[502][502];
int vis[502][502];
int dx[4] = {1, 0, -1, 0};
int dy[4] = {0, 1, 0, -1};
queue<pair<int, int>> Q;

int main(void)
{
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n, m;
  cin >> n >> m;
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      cin >> board[i][j];
    }
  }

  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      if (vis[i][j] || board[i][j] != 1)
        continue;

      vis[i][j] = 1;
      Q.push({i, j});

      while (!Q.empty())
      {
        pair<int, int> cur = Q.front();
        Q.pop();
        area[cnt]++;
        for (int dir = 0; dir < 4; dir++)
        {
          int nx = dx[dir] + cur.X;
          int ny = dy[dir] + cur.Y;
          if (nx < 0 || nx >= n || ny < 0 || ny >= m)
            continue;
          if (vis[nx][ny] || board[nx][ny] != 1)
            continue;
          vis[nx][ny] = 1;
          Q.push({nx, ny});
        }
      }
      cnt++;
    }
  }

  cout << cnt << '\n'
       << *max_element(area, area + cnt);
}