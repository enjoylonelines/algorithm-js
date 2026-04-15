def solution(nums):
    size = len(nums) // 2
    poketmons = len(set(nums))
    return min(size, poketmons)