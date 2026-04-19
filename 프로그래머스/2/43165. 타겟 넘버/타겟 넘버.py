def solution(numbers, target):
    cnt = 0
    def getAnswer(idx, summary):
        nonlocal cnt
        if idx == len(numbers):
            if summary == target: cnt += 1
            return
        else:
            getAnswer(idx+1,summary + numbers[idx])
            getAnswer(idx+1,summary - numbers[idx])
            
    getAnswer(0,0)
    return cnt

