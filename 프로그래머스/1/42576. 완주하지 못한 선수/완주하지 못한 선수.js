function solution(participant, completion) {
  const obj = {};
  
  // 참가자 카운트
  for (let p of participant) {
    obj[p] = (obj[p] || 0) + 1;
  }
  
  // 완주자 카운트 감소
  for (let c of completion) {
    obj[c] -= 1;
  }
  
  // 값이 1인 사람 = 완주 못한 사람
  for (let key in obj) {
    if (obj[key] > 0) return key;
  }
}