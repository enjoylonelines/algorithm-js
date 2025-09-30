function solution(board) {
    const dx = [-1, 0, 1, 1, 1, 0, -1, -1]
    const dy = [1, 1, 1, 0, -1, -1, -1, 0]
    const len = board.length;
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            const cell = board[i][j];
            if(cell === 1) {
                for(let k = 0; k < 8; k++) {
                    const x = i + dx[k];
                    const y = j + dy[k];
                    if(x >= 0 && x < len && y >= 0 && y < len && board[x][y] === 0) {
                        board[x][y] = 2;
                    }
                }
            }
        }
    }
    let cnt = 0;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(board[i][j] === 0) cnt++;
        }
    }
    return cnt;
}