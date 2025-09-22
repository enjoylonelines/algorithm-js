function solution(keyinput, board) {
    var answer = [0,0];
    const rowMax = Math.floor(board[0]/2)
    const colMax = Math.floor(board[1]/2)
    
    for(let input of keyinput){
        switch(input) {
            case 'left':
                if(rowMax >= Math.abs(answer[0] - 1)) {
                    answer[0]--;
                } 
            break;
            case 'right':
                if(rowMax >= Math.abs(answer[0] + 1)) {
                    answer[0]++;
                } 
            break;
            case 'up':
                if(colMax >= Math.abs(answer[1] + 1)) {
                    answer[1]++;
                } 
            break;
            case 'down':
                if(colMax >= Math.abs(answer[1] - 1)) {
                    answer[1]--;
                } 
            break;
                
        }
    }
    return answer;
}