from itertools import permutations

def solution(numbers):
    # 모든 순열 생성
    nums = set()
    for length in range(1, len(numbers) + 1):
        for perm in permutations(numbers, length):
            num = int(''.join(perm))
            nums.add(num)
    
    # 소수 개수 세기
    count = 0
    for num in nums:
        if is_prime(num):
            count += 1
    
    return count

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True