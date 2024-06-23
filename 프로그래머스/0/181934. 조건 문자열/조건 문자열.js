function solution(ineq, eq, n, m) {
    let answer = 0;
     switch (ineq){
        case ('>'):
            if(eq === '=' && n >= m) answer = 1;
            else if (eq === '!' && n > m) answer = 1;
            else answer = 0;
            break;
        case ('<'):
            if(eq === '=' && n <= m) answer = 1;
            else if (eq === '!' && n < m) answer = 1;
            else answer = 0;
            break;
            
    }
    return answer;
}