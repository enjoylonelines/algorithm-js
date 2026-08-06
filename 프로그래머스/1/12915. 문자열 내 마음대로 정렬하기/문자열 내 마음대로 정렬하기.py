def solution(strings, n):
    # 포함확인?이 뭐임, 부분 문자열 확인
    # 문자, 인덱스 추출
    # 수정 시엔 list
    # 반례 2개..?
    def cmp(a):
        return (a[n], a)
    strings.sort(key=cmp)
    return strings
    