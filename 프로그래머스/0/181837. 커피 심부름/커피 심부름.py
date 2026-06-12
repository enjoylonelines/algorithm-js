def solution(order):
    ame = "americano"
    latte = "cafelatte"
    anything = "anything"
    cost = 0
    for o in order:
        if ame in o or anything in o: cost += 4500
        else: cost += 5000
    return cost