class PQ {
    constructor() {
        this.values = [];
    }
    enq(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.values[parentIdx] <= this.values[idx]) break; // 부모가 작으면 종료

            [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
            idx = parentIdx;
        }
    }
    deq() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop(); // 하나 남았으면 pop 후 반환
        
        const min = this.values[0];
        this.values[0] = this.values.pop();
        this.sinkDown();
        return min;
    }
    sinkDown() {
        let parentIdx = 0;
        const len = this.values.length;
        while (true) {
            let leftChildIdx = parentIdx * 2 + 1;
            let rightChildIdx = parentIdx * 2 + 2;
            let swap = null;

            if (leftChildIdx < len && this.values[leftChildIdx] < this.values[parentIdx]) {
                swap = leftChildIdx;
            }
            if (rightChildIdx < len && this.values[rightChildIdx] < (swap === null ? this.values[parentIdx] : this.values[swap])) {
                swap = rightChildIdx;
            }
            if (swap === null) break;

            [this.values[parentIdx], this.values[swap]] = [this.values[swap], this.values[parentIdx]];
            parentIdx = swap;
        }
    }
}

function solution(scoville, K) {
    const pq = new PQ();
    scoville.forEach(num => pq.enq(num));

    if (isAllAtLeastK(pq, K)) return 0;

    let cnt = 0;
    while (pq.values.length > 1) {
        let val1 = pq.deq();
        let val2 = pq.deq();
        if (val2 === null) return -1; // val2가 없으면 더 이상 섞을 수 없음

        pq.enq(makeNewFood(val1, val2));
        cnt++;

        if (isAllAtLeastK(pq, K)) return cnt;
    }
    return pq.values.length === 1 && pq.values[0] >= K ? cnt : -1;
}

function makeNewFood(val1, val2) {
    return val1 + val2 * 2;
}

function isAllAtLeastK(pq, k) {
    return pq.values.length > 0 && pq.values[0] >= k;
}
