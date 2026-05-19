str = input()
ans = ""
for i in range(len(str)):
    if ord(str[i]) > ord("Z"): ans += str[i].upper()
    else: ans += str[i].lower()
    
print(ans)