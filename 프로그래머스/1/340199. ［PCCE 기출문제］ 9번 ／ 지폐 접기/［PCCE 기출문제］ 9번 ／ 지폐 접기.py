def solution(wallet, bill):
    cnt = 0
    while True:
        wallet.sort()
        bill.sort()
        wmin,wmax = wallet
        bmin,bmax = bill
        if bmin <= wmin and bmax <= wmax: break
        bill[1] = bmax // 2
        cnt += 1
        print(bmin,bmax)
    return cnt
        