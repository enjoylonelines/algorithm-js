#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
#define pq priority_queue
using namespace std;

vector<int> adj[1001];
queue<int> q;
bool vis[1001];

int main() {
    cin.tie(0);
    ios::sync_with_stdio(0);
    int n, m, u, v;
    cin >> n;
    cin >> m;
    while (m--) {
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

	q.push(1);
    int cnt = 0;
    vis[1] = true;
	while (!q.empty()) {
        int cur = q.front(); q.pop();
		for (auto nxt : adj[cur]) {
            if (vis[nxt]) continue;
            vis[nxt] = true;
            q.push(nxt);
            cnt++;
		}
	}
    cout << cnt;

	return 0;
}
