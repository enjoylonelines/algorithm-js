function solution(num, total) {
  const start = Math.ceil(total / num - (num - 1) / 2); // 시작점 계산
  const ans = Array.from({ length: num }, (_, i) => start + i);
  return ans;
}