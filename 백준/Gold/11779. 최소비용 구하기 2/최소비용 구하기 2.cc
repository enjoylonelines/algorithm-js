#include <bits/stdc++.h>
#define X first
#define Y second
using namespace std;

const int INF = 1e9+10;
int n,m,st,en;
vector<pair<int,int>> adj[1005];
int d[1005];
int order[1005];

int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	cin >> n >> m;
	fill(d, d+n+1, INF);

	while(m--) {
		int u,v,w;
		cin >> u >> v >> w;
		adj[u].push_back({w,v});
	}
	cin >> st >> en;
	priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
	d[st] = 0;
	// 우선선위 큐에 (0, 시작점) 추가
	pq.push({d[st],st});
	while(!pq.empty()) {
		auto cur = pq.top(); pq.pop();
		int dist = cur.X;
		int idx = cur.Y;
		if(d[idx] != dist) continue; // 정점idx의 최단거리 d가 맞는지 확인
		for(auto nxt : adj[idx]) {
			int nxt_dist = nxt.X;
			int nxt_idx = nxt.Y;
			if(d[nxt_idx] <= d[idx] + nxt_dist) continue; //nxt를 거치는게 최단경로가 아니면 스킵
			d[nxt_idx] = d[idx] + nxt_dist; //최단경로 업데이트
			order[nxt_idx] = idx; // 왜 idx??
			pq.push({d[nxt_idx], nxt_idx});
		}	
	}

	cout << d[en] << '\n';
	vector<int> path;
	int cur = en;
	while(cur != st) {
		path.push_back(cur);
		cur = order[cur];
	}
	path.push_back(cur);

	reverse(path.begin(), path.end());
	cout << path.size() << '\n';
	for(auto x : path) cout << x << ' ';
}
