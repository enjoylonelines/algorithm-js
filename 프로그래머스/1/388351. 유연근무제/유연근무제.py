def solution(schedules, timelogs, startday):
    ans = 0
    def time_format(time):
        hour = time // 100
        minute = time % 100 + 10
        if minute >= 60:
            hour += 1
            minute = minute % 60
        return hour * 100 + minute
    schedules = [time_format(s) for s in schedules]
    
    for i,times in enumerate(timelogs):
        time_rimit = schedules[i]
        cnt = 0
        for i,t in enumerate(times):
            day = (startday + i - 1) % 7
            print("day", day, "cnt", cnt)
            if day == 5 or day == 6: 
                cnt += 1
                print("day", day, "cnt", cnt)
                continue
            if time_rimit < t: break
            cnt += 1
        if cnt == len(times): ans += 1
    return ans