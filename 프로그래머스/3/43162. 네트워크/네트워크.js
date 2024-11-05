
function solution(n, computers) {
    const visited = []
    let ans = 0;
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i)
            ans++;
        }
    }
    return ans;
    
    
    function dfs(node) {
        visited[node] = true;
        for(let i = 0; i < n; i++) {
            if(computers[node][i] && !visited[i]) {
                dfs(i)
            }
        }
    }   
}

 

