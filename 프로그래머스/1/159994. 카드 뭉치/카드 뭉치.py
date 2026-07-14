def solution(cards1, cards2, goal):
    l1 = len(cards1)
    l2 = len(cards2)
    if l1 + l2 < len(goal): return "No"
    
    i = j = 0
    for word in goal:
        if i < len(cards1) and cards1[i] == word:
            i += 1
        elif j < len(cards2) and cards2[j] == word:
            j += 1
        else:
            return "No"
    return "Yes"