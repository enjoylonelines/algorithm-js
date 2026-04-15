def solution(nums):
    answer = 0
    size = len(nums) // 2
    var = len(set(nums))
    if var < size: answer = var
    else: answer = size
    return answer