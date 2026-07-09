def solution(video_len, pos, op_start, op_end, commands):
    def str_to_int(s):
        return map(int, s.split(":"))
    def to_sec(t):
        m,s = str_to_int(t)
        return m * 60 + s
    video_len = to_sec(video_len)
    pos = to_sec(pos)
    op_start = to_sec(op_start)
    op_end = to_sec(op_end)
    for c in commands:
        if op_start <= pos <= op_end: pos = op_end
        if c == "next":
            pos += 10
            if pos > video_len - 10: pos = video_len
        if c == "prev":
            pos -= 10
            if pos < 10: pos = 0
        if op_start <= pos <= op_end: pos = op_end

    m = pos // 60
    s = pos % 60
    return f"{m:02d}:{s:02d}"