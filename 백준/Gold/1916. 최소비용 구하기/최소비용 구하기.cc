#include <bits/stdc++.h>
#define X first
#define Y second
using namespace std;
int INF = 0x3f3f3f3f;
int d[1005];
int n,m,st,en;
vector<pair<int,int>> adj[1005];
priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;

int main() {
	cin >> n >> m; //정점, 간선
	fill(d, d + n + 1, INF);
	while(m--){
		int u,v,w;
		cin >> u >> v >> w;
		adj[u].push_back({w,v});
	}
	cin >> st >> en;
	d[st] = 0;
	pq.push({d[st],st});
	while(!pq.empty()){
		auto cur = pq.top(); pq.pop();
		int cur_dist = cur.X;
		int cur_idx = cur.Y;
		if(d[cur_idx] != cur_dist) continue;
		for(auto nxt : adj[cur_idx]){
			int nxt_dist = nxt.X;
			int nxt_idx = nxt.Y;
			if(d[nxt_idx] <= d[cur_idx] + nxt_dist) continue;
			d[nxt_idx] = d[cur_idx] + nxt_dist;
			pq.push({d[nxt_idx], nxt_idx});
		}
	}
	cout << d[en];

}