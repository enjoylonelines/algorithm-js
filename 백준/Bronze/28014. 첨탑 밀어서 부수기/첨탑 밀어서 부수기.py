num = input()
nums = list(map(int, input().split()))
selected = nums[0]
cnt = 1
for i,num in enumerate(nums):
  if i == 0: continue
  if selected <= num:
    cnt += 1
  selected = num
print(cnt) 

