#include <bits/stdc++.h>
using namespace std;
int n, k;
int dist[100002];
queue<int> Q;

void bfs()
{
  while (dist[k] == -1)
  {
    int cur = Q.front();
    Q.pop();
    for (int dir : {cur - 1, cur + 1, cur * 2})
    {
      if (dir < 0 || dir > 100000)
        continue;
      if (dist[dir] != -1)
        continue;
      dist[dir] = dist[cur] + 1;
      Q.push(dir);
    }
  }
}

int main(void)
{
  ios::sync_with_stdio(0);
  cin.tie(0);

  cin >> n >> k;
  fill(dist, dist + 100001, -1);
  dist[n] = 0;
  Q.push(n);

  bfs();
  cout << dist[k];
}