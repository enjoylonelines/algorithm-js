class graph {
    constructor() {
        this.adjList = {};
    }
    addVertex(vertex) {
        if(!this.adjList[vertex])
        this.adjList[vertex] = [];
    } 
    addEdge(v1,v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }
    
    
}
function solution(n, edge) {
    let g = new graph();
    
    for(let [v1,v2] of edge) { 
        g.addEdge(v1,v2);
    }
    
    const dist = Array(n + 1).fill(-1); // 미방문은 -1
    const q = [1]; // 1번노드부터, 거리계산은 너비우선탐색 큐
    dist[1] = 0; // 1번 노드의 거리는 0
    
    while(q.length) {
        const vertex = q.shift();
        for(let next of g.adjList[vertex]) {
            if(dist[next] === -1) {
                dist[next] = dist[vertex] + 1;
                q.push(next);
            }
        }
    }
    const maxWeight = Math.max(...dist);
    return dist.filter(n => n === maxWeight).length;
}