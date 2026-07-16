from datetime import date
def solution(today, terms, privacies):
    def str_to_day(string,is_created_at, extra_month):
        y,m,d = map(int,string.split("."))
        if is_created_at: return y * 12 * 28 + (m + extra_month) * 28 + d 
        else: return y * 12 * 28 + m * 28 + d
    ans = []
    today = str_to_day(today, False, 0)
    terms = [st.split() for st in terms]
    terms = {t: int(deadline) for t, deadline in terms}
    for i,item in enumerate(privacies):
        created_at,t = item.split()
        created_at = str_to_day(created_at, True, terms[t])
        if today > created_at - 1: ans.append(i + 1)
    return ans