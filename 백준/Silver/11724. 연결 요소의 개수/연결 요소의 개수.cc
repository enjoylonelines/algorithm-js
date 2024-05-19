#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

vector<int> vv[1001];
queue<int> q;
int vis[1001];
int main() {
    cin.tie(0);
    ios::sync_with_stdio(0);
    int n, m, u, v;
    cin >> n >> m;
    while (m--) {
        cin >> u >> v;
        vv[u].push_back(v);
        vv[v].push_back(u); 
        //왜 vis는 chk안함? >> 일단 모든 정점을 순회해야함
    }
    int cnt = 0;
	for (int i = 1; i <= n; i++) { //모든 정점을 순회하면서
        if (vis[i]) continue;       //방문한 정점은 건너뜀
        cnt++;                  // 큐가 끊어지면 연결 요소 추가
        q.push(i);
		while (!q.empty()) {
            int cur = q.front(); q.pop();
            for (auto nxt : vv[cur]) { 
                if (vis[nxt]) continue;
                q.push(nxt); //모든 인접 정점을 큐에 추가  
                vis[nxt] = 1;
            }
		}
	}
    cout << cnt;
	return 0;
}
