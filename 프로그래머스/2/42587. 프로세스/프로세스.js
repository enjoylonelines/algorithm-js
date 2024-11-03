function solution(priorities, location) {
    let order = 0;
    priorities = priorities.map((val, idx) => ({ val, idx }));

    while (priorities.length > 0) {
        let maxEl = Math.max(...priorities.map(el => el.val)); // 남은 요소들 중 최대값 계산
        let tmp = priorities.shift();

        if (tmp.val === maxEl) { // 현재 값이 최대값인 경우
            order++;
            if (tmp.idx === location) return order;
        } else { // 최대값이 아닌 경우 다시 뒤로 보내기
            priorities.push(tmp);
        }
    }
}