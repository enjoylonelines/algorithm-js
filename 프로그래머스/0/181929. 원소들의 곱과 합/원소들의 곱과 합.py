def solution(num_list):
    sum = 0
    multiple = 1
    for n in num_list:
        sum += n
        multiple *= n
    return 1 if multiple < sum**2 else 0