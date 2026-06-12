def solution(board, k):
    summ = 0
    for i in range(len(board)):
        for j in range(len(board[i])):
            if i + j <= k:
                summ += board[i][j]
    return summ