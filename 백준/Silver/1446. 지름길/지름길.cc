#include <bits/stdc++.h>
#define X first
#define Y second
using namespace std;
int INF = 0x3f3f3f3f;
int d[10005];
int n,m,st,en;
priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
vector<pair<int,int>> adj[10005];

int main() {
		cin >> m >> n;
		fill(d, d + n + 1, INF);

		for(int i = 0; i < n; i++) {
			adj[i].push_back({i + 1, 1});
		} // 정점 초기화

		while(m--) {
			int u,v,w;
			cin >> u >> v >> w;
			adj[u].push_back({v,w});
		}
		d[0] = 0;
		pq.push({0,0});

		while(!pq.empty()) {
			auto cur = pq.top(); pq.pop();
			int cur_idx = cur.X;
			int cur_dist = cur.Y;
			if(d[cur_idx] != cur_dist) continue;
			for(auto nxt : adj[cur_idx]) { 
				int nxt_idx = nxt.X;
				int nxt_dist = nxt.Y;
				if(d[nxt_idx] <= d[cur_idx] + nxt_dist) continue;
				d[nxt_idx] = d[cur_idx] + nxt_dist;
				pq.push({nxt_idx, d[nxt_idx]});
			}
		}

		// for(int i = 0; i <= n; i++){
		// 	if(d[i] >= INF) continue;
		// 	cout << d[i] << '\n'; 
		// }
		cout << d[n];
}