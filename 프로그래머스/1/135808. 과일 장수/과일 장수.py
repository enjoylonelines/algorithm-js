def solution(k, m, score):
    idx = 0
    len_score = len(score)
    summ = 0
    score.sort(reverse=True)
    while idx + m <= len_score:
        summ += min(score[idx:idx + m]) * m
        idx += m
        
    return summ